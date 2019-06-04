const express = require('express')
const router = express.Router()
const qs = require('querystring')
const AuthController = require('../controllers/AuthController')
const AuthControllerPolicy = require('../policies/AuthContollerPolicy')
const BookController = require('../controllers/BookController')
const axios = require('axios')
const config = require('../config/config')

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

router.post('/book/search', (req, res, next) => {
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
    res.send({
      items: response.data.items
    })
  }).catch((error) => {
    res.status(400).send({
      error: error
    })
  })
})

router.post('/book/register',
  BookController.bookRegister
)

module.exports = router
