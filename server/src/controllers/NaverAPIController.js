const axios = require('axios')
const config = require('../config/config')

module.exports = {
  async bookSearch (req, res) {
    try {
      const response = await axios.get(`https://openapi.naver.com/v1/search/book.json`, {
        headers: {
          "X-Naver-Client-Id": config.naverAPI.clientId,
          "X-Naver-Client-Secret": config.naverAPI.clientSecret,
        },
        params: {
          "query": req.body.title,
          "display": "5",
          "start": "1"
        }
      })
      const parsedItems = []
      response.data.items.forEach(item => {
        parsedItems.push(JSON.parse(JSON.stringify(item).replace(/(<([^>]+)>)/ig,"")))
      })
      console.log(parsedItems)
      res.send({
        items: parsedItems
      })
    } catch (error) {
      res.status(400).send({
        error: error
      })
    }
  }
}