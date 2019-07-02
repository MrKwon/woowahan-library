import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/user` //`https://d10qpmwsutokcb.cloudfront.net/user/`
  })
}