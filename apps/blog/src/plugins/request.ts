import request from '@dog/axios-config'
import type { AxiosRequestConfig } from '@dog/axios-config'
export default function (config: AxiosRequestConfig) {
  return request({
    baseURL: import.meta.env.VITE_BASE_URL,
    ...config,
  })
}
