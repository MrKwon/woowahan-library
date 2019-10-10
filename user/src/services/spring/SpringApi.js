import axios from 'axios'

const config = {
  springUrl: "http://localhost:9090"
}

const base = () => (
  axios.create({
    baseURL: config.springUrl
  })
)

export default {
  base
}