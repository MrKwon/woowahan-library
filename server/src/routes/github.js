const express = require('express')
const router = express.Router()
const GithubController = require('../controllers/GithubController')

router.get('/oauth', 
  GithubController.oauth
)

router.get('/user',
  GithubController.getUser
)

module.exports = router