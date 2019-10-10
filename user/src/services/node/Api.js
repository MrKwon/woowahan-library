import axios from 'axios'

const config = {
  nodeUrl: "http://localhost:8081"
}

export default {
  base() {
    return axios.create({
      baseURL: config.nodeUrl
    })
  },

  user() {
    return axios.create({
      baseURL: `${config.nodeUrl}/user`
    })
  },

  naverApi() {
    return axios.create({
      baseURL: `${config.nodeUrl}/naverApi`
    })
  },

  github() {
    return axios.create({
      baseURL: `${config.nodeUrl}/github`
    })
  },

  githubAuth(header) {
    return axios.create({
      baseURL: `${config.nodeUrl}/github`,
      headers: {
        Authorization: `Bearer ${header}`
      }
    })
  },

  request() {
    return axios.create({
      baseURL: `${config.nodeUrl}/request`,
    })
  },

  serials() {
    return axios.create({
      baseURL: `${config.nodeUrl}/serials`
    })
  },

  rent(header) {
    return axios.create({
      baseURL: `${config.nodeUrl}/rents`,
      headers: {
        Authorization: `Bearer ${header}`
      }
    })
  }
}