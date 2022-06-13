import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
const createRequest = (baseURL: string) => {
  const request = axios.create({
    baseURL,
    withCredentials: true,
    timeout: 5 * 6000
  })

  // 请求拦截
  const requestInterceptor = (config: AxiosRequestConfig) => {
    return config
  }

  request.interceptors.request.use(requestInterceptor, (error) =>
    Promise.reject(error)
  )

  // 响应拦截
  const responseInterceptor = (response: AxiosResponse) => response

  request.interceptors.response.use(
    responseInterceptor,
    (error: AxiosError) => {
      // 错误处理
      return Promise.reject(error)
    }
  )

  return request
}

// 支持多个base
// const request = {
//   v1: createRequest('/api/xxx'),
//   v2: createRequest('/api/xxx'),
// }
const request = createRequest('')

export default request
