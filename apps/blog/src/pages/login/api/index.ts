import request from '@/plugins/request'

export const postLogin = (data: {
  userName: string
  password: string
  platform: string
  captcha: string
  captchaKey: string
}) => {
  // 发送请求
  return request({
    url: '/api/basic/Token/password',
    data,
    method: 'POST',
  })
}
