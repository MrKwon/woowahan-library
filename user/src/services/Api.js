import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://d10qpmwsutokcb.cloudfront.net/user/`
  })
}