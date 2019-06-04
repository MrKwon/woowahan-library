const axios = require('axios')
const config = require('../config/config')

module.exports = {
  async bookSearch (req, res) {
    axios.get(`https://openapi.naver.com/v1/search/book.json`, {
      headers: {
        "X-Naver-Client-Id": config.naverAPI.clientId,
        "X-Naver-Client-Secret": config.naverAPI.clientSecret,
      },
      params: {
        "query": req.body.title,
        "display": "5",
        "start": "1"
      }
    }
  ).then((response) => {
    response.data.items.forEach(item => {
      item.title = item.title.replace(/(<([^>]+)>)/ig,"")
    })
    res.send({
      items: response.data.items
    })
  }).catch((error) => {
    res.status(400).send({
      error: error
    })
  })
  }
}