const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch({
    // headless: true,
    // Puppeteer默认使用的是Chromium浏览器，如果你想使用Chrome浏览器，需要在启动浏览器时设置选项为Chrome浏览器的路径
    executablePath:
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: false,
    args: [`--window-size=1920,1080`],
  })
  const page = await browser.newPage()
  await page.setViewport({
    width: 1920,
    height: 1080,
  })
  await page.goto('https://www.xeszxc.com/')
  await page.focus('.el-input__inner')
  const acc = '13144805070'
  acc.split('').forEach((item) => {
    page.keyboard.press(item)
  })
  const password = '805070'
  page.keyboard.press('Tab')
  password.split('').forEach((item) => {
    page.keyboard.press(item)
  })
  page.keyboard.press('Tab')
  password.split('').forEach((item) => {
    page.keyboard.press(item)
  })
})()
