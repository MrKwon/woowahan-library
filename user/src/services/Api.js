import axios from 'axios'

export default {
  user() {
    return axios.create({
      baseURL: `http://localhost:8081/user` //`https://d10qpmwsutokcb.cloudfront.net/user/`
    })
  },

  naverApi() {
    return axios.create({
      baseURL: `http://localhost:8081/naverApi` //`https://d10qpmwsutokcb.cloudfront.net/naverApi`
    })
  }
}