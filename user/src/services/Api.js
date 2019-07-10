import axios from 'axios'
import config from '../config/config'

export default {
  base() {
    return axios.create({
      baseURL: config.hostUrl
    })
  },

  user() {
    return axios.create({
      baseURL: `${config.hostUrl}/user`
    })
  },

  naverApi() {
    return axios.create({
      baseURL: `${config.hostUrl}/naverApi`
    })
  },

  github() {
    return axios.create({
      baseURL: `${config.hostUrl}/github`
    })
  },

  githubAuth(header) {
    return axios.create({
      baseURL: `${config.hostUrl}/github`,
      headers: {
        Authorization: `Bearer ${header}`
      }
    })
  }
}