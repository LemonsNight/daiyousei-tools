import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import * as fs from 'fs'
// @ts-ignore
import { getInstalledApps } from 'get-installed-apps'

import { WebSocketServer } from 'ws'
import { exec } from 'child_process'

const app = express()
const port = 3000

// 解析数据
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded())
app.use(
  cors({
    origin: '*',
  }),
)

// 打包接口
app.post('/api/build', (req, res) => {
  console.log(JSON.parse(req.body))
  const formData = JSON.parse(req.body)
  // const {version, isUpload, environment, url} = formData
  res.status(200).json({
    data: '200',
  })
})

app.listen(port, () => {
  console.log(`已启动： http://localhost:${port}`)
})

const wss = new WebSocketServer({ port: 888 })

// 打开AS
const checkServer = () => {
  return new Promise((resolve, reject) => {
    getInstalledApps().then((apps) => {
      if (Array.isArray(apps)) {
        const fn = (appPath) => {
          exec(`start "" "${appPath}"`)
        }
        const appInfo = apps.find(
          (item) => item.appIdentifier === 'Android Studio',
        )
        if (appInfo) {
          const appPath = appInfo.DisplayIcon
          const appPathUrl = `${appPath.split('.exe')[0]}64.exe`
          fs.exists(appPath, (res) => {
            resolve(`正在尝试打开: ${appPath},请耐心等待`)
            if (res) {
              fn(appPath)
            } else {
              fs.exists(appPathUrl, (res) => {
                if (res) {
                  fn(appPathUrl)
                }
              })
            }
          })
        } else {
          reject(`请检查本级是否安装了AS`)
        }
      }
    })
  })
}

// 执行build
const handlePackageJsonBuild = ({ url, env }) => {
  return new Promise((resolve) => {
    const asURL = `${url}\\apps\\digital-village` // AS代码工程 动态
    if (env === '宣恩开发环境') {
    }
    if (env === '宣恩测试环境') {
    }
    if (env === '宣恩正式环境') {
    }
    if (env === '来凤正式环境') {
    }
    const uniURL = `${url}\\apps\\digital-village` // uni代码工程 固定不变的
  })
}

// 当有客户端连接时触发
wss.on('connection', (ws) => {
  ws.on('message', async (message) => {
    let interrupt = false // 中断标记
    if (message instanceof Buffer) {
      const strMessage: {
        url: string
        env: string
      } = JSON.parse(message.toString('utf8'))

      ws.send(`端口${port}: 链接成功`)
      ws.send(`端口${port}: 正在打开AndroidStudio`)
      const text = await checkServer().catch((e) => {
        ws.send(`端口${port}: ${e}`)
        interrupt = false
      })
      ws.send(`端口${port}: ${text}`)
      ws.send(`端口${port}: 开始执行${strMessage.url}`)
      await handlePackageJsonBuild(strMessage)
    }
  })
  // 当客户端断开连接时触发
  ws.on('close', () => {
    console.log('Client disconnected')
  })
})
