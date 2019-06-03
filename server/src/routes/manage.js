const express = require('express')
const router = express.Router()
const qs = require('querystring')
const rs = require('randomstring')
const axios = require('axios')
require('dotenv').config()

let state

router.get('/github', (req, res, next) => {
  state = rs.generate()
  const url = 'https://github.com/login/oauth/authorize?'
  const query = qs.stringify({
    client_id: process.env.GIT_AUTH_CLIENT,
    redirect_uri: process.env.HOST_URL + 'githublogin',
    state: state,
    scope: 'user:email',
  })
  const githubAuthUrl = url + query
  res.send(githubAuthUrl)
})

router.get('/login', (req, res, next) => {
  const returnCode = req.query.code
  const returnState = req.query.state

  if (state !== returnState) {
    res.send(false)
  }

  const host = 'https://github.com/login/oauth/access_token?'
  const queryString = qs.stringify({
    client_id: process.env.GIT_AUTH_CLIENT,
    client_secret: process.env.GIT_AUTH_SECRET,
    code: returnCode,
    redirect_uri: process.env.HOST_URL + 'githublogin',
    state: state,
  })
  const authURL = host + queryString;

  axios.post(authURL)
  .then((response) => {
      const token = qs.parse(response.data).access_token;
      res.send(token)
  })
  .catch((err) => {
      console.log(err)
  })
})

router.get('/user', (req, res, next) => {
  const config = {
    headers: {
      Authorization: 'token ' + req.query.token,
      'User-Agent': 'Login-App'
    }
  }
  axios.get('https://api.github.com/user/public_emails', config)
  .then((resp) => {
    res.send(resp.data[0].email)
  })
  .catch((err) => {
    console.log(err)
  })
})

module.exports = router