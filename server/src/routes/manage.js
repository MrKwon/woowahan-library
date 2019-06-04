const express = require('express')
const router = express.Router()
const qs = require('querystring')
const AuthController = require('../controllers/AuthController')
const AuthControllerPolicy = require('../policies/AuthContollerPolicy')
const axios = require('axios')

router.get('/', (req, res) => {
  res.send({
    message: 'this is manage router'
  })
})

router.post('/register',
  AuthControllerPolicy.register,
  AuthController.register
)

router.post('/login',
  AuthController.login
)

router.post('/book', (req, res, next) => {
  // const toSearchTitleUTF8 = encodeURIComponent(req.body.title)
  axios.get(`https://openapi.naver.com/v1/search/book.json`, {
      headers: {
        "X-Naver-Client-Id": "hT9wIkIHfMMfOQbCWPj2",
        "X-Naver-Client-Secret": "UYYC5IfmLJ",
      },
      params: {
        "query": req.body.title,
        "display": "5",
        "start": "1"
      }
    }
  ).then((response) => {
    res.send({
      items: response.data.items
    })
  }).catch((error) => {
    res.status(400).send({
      error: error
    })
  })
})

module.exports = router
