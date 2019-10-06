import axios from 'axios'

// const base = "http://localhost:8081"
const base = "https://d1e0ttqude6sum.cloudfront.net"

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
  },

  rent(header) {
    return axios.create({
      baseURL: `${base}/rents`,
      headers: {
        Authorization: `Bearer ${header}`
      }
    })
  }
}