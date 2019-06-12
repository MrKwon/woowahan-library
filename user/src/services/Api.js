import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://ec2-15-164-100-148.ap-northeast-2.compute.amazonaws.com/user`
  })
}