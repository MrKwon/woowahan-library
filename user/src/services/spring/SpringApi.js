import axios from 'axios'

const baseUrl = "http://localhost:9090"

const base = () => (
  axios.create({
    baseURL: baseUrl
  })
)

export default {
  base
}