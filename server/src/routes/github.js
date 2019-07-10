const express = require('express')
const router = express.Router()
const TokenAuth = require('../controllers/TokenAuth')
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

router.get('/tokenauthenticate',
  TokenAuth,
  GithubController.tokenAuthenticator
)

module.exports = router