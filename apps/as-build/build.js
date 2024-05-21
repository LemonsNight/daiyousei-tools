const { ipcRenderer } = require('electron')
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
      button.innerHTML = `执行-${key}`
      document.getElementById(`${v}-script`).appendChild(button)
    }
  })

  ipcRenderer.on(`${v}-sdk`, (event, sdk) => {
    sdk.forEach((item) => {
      const button = document.createElement('option')
      button.innerHTML = `项目-${item}`
      document.getElementById(`${v}-sdk`).appendChild(button)
    })
  })
}

document.querySelector('#myForm').addEventListener('submit', function (event) {
  event.preventDefault()

  const formData = {
    project: document.getElementById('root-project-text').value,
    editor: document.getElementById('root-as-text').value,
    packageScript: document.getElementById('root-project-script').value,
    sdkProject: document.getElementById('root-project-sdk').value,
  }
  console.log(formData)
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
