import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://open.duyiedu.com'
axios.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    appkey: 'duyi18381972340_1590676621257'
  }

  return config
})

axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data.data
})

const instance = axios.create({
  baseURL: 'https://open.duyiedu.com'
})
instance.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    appkey: 'duyi18381972340_1590676621257'
  }

  return config
})

instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
})
Vue.prototype.$http = instance
export default axios
