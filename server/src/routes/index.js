const express = require('express')
const router = express.Router()
const GithubOauthController = require('../controllers/GithubOauthController')

router.get('/', (req, res) => {
  res.send({
    message: 'test router'
  })
})

router.get('/github',
  GithubOauthController.oauth
)

router.get('/signin',
  GithubOauthController.signin
)

router.get('/user',
  GithubOauthController.user
)

module.exports = router