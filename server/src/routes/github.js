const express = require('express')
const router = express.Router()
const GithubController = require('../controllers/GithubController')

router.get('/oauthuser', 
  GithubController.getOauthUser
)

router.get('/user',
  GithubController.getUser
)

router.get('/oauthmanager',
  GithubController.getOauthManager
)

router.get('/manager',
  GithubController.getManager
)

module.exports = router