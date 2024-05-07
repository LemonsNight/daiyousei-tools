import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
const instance = axios.create({
  timeout: 1000 * 1000000,
})
instance.interceptors.request.use((config) => {
  return config
})
instance.interceptors.response.use((config) => {
  return config
})

export default function (config: AxiosRequestConfig) {
  return instance.request(config)
}

export { AxiosRequestConfig }
