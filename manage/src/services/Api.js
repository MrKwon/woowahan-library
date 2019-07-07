import axios from 'axios'

export default {
  base() {
    return axios.create({
      baseURL: `http://localhost:8081`
    })
  },

  manager() {
    return axios.create({
      baseURL: `http://localhost:8081/manage` //`https://d10qpmwsutokcb.cloudfront.net/manager/`
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
  }
}