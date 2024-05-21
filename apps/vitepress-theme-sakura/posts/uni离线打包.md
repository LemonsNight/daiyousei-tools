---
title: 使用 electron 开发一个uni离线打包
tags: [uniapp, 前端]
cover: /vitepress-theme-sakura/60651947_p0.jpg
---

## 准备工作

pnpm + node18

## 初始化

```sh
cd electron-build
```

```sh
pnpm init
```

```sh
pnpm install electron
```
## 添加指令
其中main.js是你的入口文件
```json
{
  "scripts": {
    "start": "electron ."
  },
  "main": "main.js",
  "type": "module"
}
```
## 入口文件
```js
// BrowserWindow 创建和控制浏览器窗口
// app 控制应用的事件生命周期。
import { app, BrowserWindow } from 'electron/main'
const win = new BrowserWindow({
  width: 800, // 窗口大小
  height: 800,
})
win.loadFile('build.html') // 引入我们的界面入口文件

// 关闭所有窗口后退出应用
app.on('window-all-closed', () => {
  app.quit()
})
```
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>UNI离线打包工具</title>
  <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';" />
</head>
<body>
<button>UNI离线打包（安卓）</button>
</body>
</html>
```
