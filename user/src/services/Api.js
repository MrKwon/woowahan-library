import axios from 'axios'
// import store from '@/store'

export default {
  base() {
    return axios.create({
      baseURL: `http://localhost:8081`
    })
  },

  user() {
    return axios.create({
      baseURL: `http://localhost:8081/user` //`https://d10qpmwsutokcb.cloudfront.net/user/`
    })
  },

  naverApi() {
    return axios.create({
      baseURL: `http://localhost:8081/naverApi` //`https://d10qpmwsutokcb.cloudfront.net/naverApi`
    })
  },

  github() {
    return axios.create({
      baseURL: `http://localhost:8081/github`
    })
  },

  githubAuth(header) {
    return axios.create({
      baseURL: `http://localhost:8081/github`,
      headers: {
        Authorization: `Bearer ${header}`
      }
    })
  }
}