import axios from 'axios'
import config from '../../config'

const base = () => (
  axios.create({
    baseURL: config.springUrl
  })
)

export default {
  base
}