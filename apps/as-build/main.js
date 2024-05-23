const { app, BrowserWindow, ipcMain, dialog } = require('electron/main')
const fs = require('node:fs')
const JSON5 = require('json5')
const constant = require('./constant')
const createWindow = async () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true, // 注意：从 Electron 5 开始，默认禁用了 nodeIntegration
      contextIsolation: false, // 如果你正在使用 Electron 12 或更高版本，你可能需要设置这个
    },
  })
  await win.loadFile('build.html')
  // 开启调试
  win.webContents.openDevTools()

  for (const v of Object.values(constant)) {
    ipcMain.on(v, (event) => {
      dialog
        .showOpenDialog({
          properties: ['openDirectory'], // 选择目录
        })
        .then((result) => {
          if (result.canceled) {
            console.log('No file selected')
            return
          }
          const filePath = result.filePaths[0]
          event.reply(v, filePath)
          if (v === constant.ROOT_PROJECT) {
            // const manifestBuffer = fs.readFileSync(
            //   `${filePath}/apps/digital-village/src/manifest.json`,
            // )
            const packageBuffer = fs.readFileSync(`${filePath}/package.json`)
            // const { appid, versionName } = JSON5.parse(
            //   manifestBuffer.toString(),
            // )
            const packageJson = JSON5.parse(packageBuffer.toString())
            event.reply(`${v}-script`, packageJson.scripts)

            fs.readdir(`${filePath}/apps`, {}, (error, files) => {
              event.reply(`${v}-sdk`, files)
            })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    })
  }
}
// 准备就绪
app.whenReady().then(() => {
  createWindow()
})
// 关闭窗口
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
