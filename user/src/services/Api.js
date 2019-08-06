import axios from 'axios'

// const base = "https://d10qpmwsutokcb.cloudfront.net"
const base = "http://localhost:8081"

export default {
  base() {
    return axios.create({
      baseURL: base
    })
  },

  user() {
    return axios.create({
      baseURL: `${base}/user`
    })
  },

  naverApi() {
    return axios.create({
      baseURL: `${base}/naverApi`
    })
  },

  github() {
    return axios.create({
      baseURL: `${base}/github`
    })
  },

  githubAuth(header) {
    return axios.create({
      baseURL: `${base}/github`,
      headers: {
        Authorization: `Bearer ${header}`
      }
    })
  },

  request() {
    return axios.create({
      baseURL: `${base}/request`,
    })
  },

  serials() {
    return axios.create({
      baseURL: `${base}/serials`
    })
  }
}