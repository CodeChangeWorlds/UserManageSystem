import axios from 'axios'
//网络请求封装
export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL:'http://localhost:3000',
    timeout: 5000
  })
//  发送真正的网络请求
  return instance(config)
}