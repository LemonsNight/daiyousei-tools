const { ipcRenderer } = require('electron')
const { spawn } = require('child_process')

const constant = require('./constant')
const { getInstalledApps } = require('get-installed-apps')
for (const v of Object.values(constant)) {
  document.getElementById(v).addEventListener('click', () => {
    ipcRenderer.send(v)
  })

  ipcRenderer.on(v, (event, path) => {
    document.getElementById(`${v}-text`).value = path
  })

  ipcRenderer.on(`${v}-script`, (event, scripts) => {
    for (const key of Object.keys(scripts)) {
      const button = document.createElement('option')
      button.innerHTML = `${key}`
      document.getElementById(`${v}-script`).appendChild(button)
    }
  })

  ipcRenderer.on(`${v}-sdk`, (event, sdk) => {
    sdk.forEach((item) => {
      const button = document.createElement('option')
      button.innerHTML = `${item}`
      document.getElementById(`${v}-sdk`).appendChild(button)
    })
  })
}

document.querySelector('#myForm').addEventListener('submit', function (event) {
  event.preventDefault()
})

document.getElementById('auto-as').addEventListener('click', (event) => {
  getInstalledApps().then((apps) => {
    if (Array.isArray(apps)) {
      const appInfo = apps.find(
        (item) => item.appIdentifier === 'Android Studio',
      )
      if (appInfo) {
        const appPath = appInfo.DisplayIcon
        document.getElementById('root-as-text').value = `${
          appPath.split('.exe')[0]
        }64.exe`
      }
    }
  })
})

document.getElementById('submit').addEventListener('click', () => {
  const formData = {
    project: document.getElementById('root-project-text').value,
    editor: document.getElementById('root-as-text').value,
    packageScript: document.getElementById('root-project-script').value,
    sdkProject: document.getElementById('root-project-sdk').value,
  }
  // 执行UNI打包脚本
  const pnpm = spawn('pnpm', [formData.packageScript], {
    cwd: formData.project,
    timeout: 60 * 1000,
    stdio: 'inherit',
    shell: true,
  })
  // 杀死进程并且取消监听事件
  const handleKill = () => {
    pnpm.kill()
    document
      .getElementById('submit-kill')
      .removeEventListener('click', handleKill)
  }
  document.getElementById('submit-kill').addEventListener('click', handleKill)

  pnpm.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })

  pnpm.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`)
  })

  pnpm.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
    handleKill()
  })

  pnpm.on('error', (err) => {
    console.error(`Error occurred: ${err}`)
    handleKill()
  })
})
