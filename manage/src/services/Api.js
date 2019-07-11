import axios from 'axios'
import config from '../config/config'

export default {
  base() {
    return axios.create({
      baseURL: config.hostUrl
    })
  },

  manager() {
    return axios.create({
      baseURL: `${config.hostUrl}/manage` //`https://d10qpmwsutokcb.cloudfront.net/manager/`
    })
  },

  naverApi() {
    return axios.create({
      baseURL: `${config.hostUrl}/naverApi` //`https://d10qpmwsutokcb.cloudfront.net/naverApi`
    })
  },

  github() {
    return axios.create({
      baseURL: `${config.hostUrl}/github`
    })
  },

  request() {
    return axios.create({
      baseURL: `${config.hostUrl}/request`
    })
  }
}