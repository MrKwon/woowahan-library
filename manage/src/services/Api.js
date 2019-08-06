import axios from 'axios'
// import config from '../config/config'

// const hostUrl = 'https://d10qpmwsutokcb.cloudfront.net'
const hostUrl = 'http://localhost:8081'

export default {
  base() {
    return axios.create({
      baseURL: hostUrl
    })
  },

  manager() {
    return axios.create({
      baseURL: `${hostUrl}/manage`
    })
  },

  naverApi() {
    return axios.create({
      baseURL: `${hostUrl}/naverApi`
    })
  },

  github() {
    return axios.create({
      baseURL: `${hostUrl}/github`
    })
  },

  request() {
    return axios.create({
      baseURL: `${hostUrl}/request`
    })
  },

  users() {
    return axios.create({
      baseURL: `${hostUrl}/users`
    })
  },

  serials() {
    return axios.create({
      baseURL: `${hostUrl}/serials`
    })
  }
}