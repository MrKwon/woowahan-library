const axios = require('axios')
const { gitOauth } = require('../config/config')
const qs = require('querystring')

module.exports = {
  async oauth(req, res) {
    const url = 'https://github.com/login/oauth/authorize?'
    const query = qs.stringify({
      client_id: gitOauth.clientId,
      redirect_uri: "http://localhost:8080/githubredirection",
      scope: 'user',
      // allow_signup: 'true'
    })
    const githubAuthUrl = url + query
    res.send(githubAuthUrl)
  },

  async signin(req, res) {
    const returnCode = req.query.code
    try {
      const response = await axios.post(`https://github.com/login/oauth/access_token?client_id=${gitOauth.clientId}&client_secret=${gitOauth.clientSecret}&code=${returnCode}`,{
        headers: {
          accept: 'application/json'
        }
      })
      const token = qs.parse(response.data).access_token;
      res.send(token)
    } catch(error) {
      console.log(error)
    }
  },

  async user(req, res, next) {
    const config = {
      headers: {
        Authorization: 'token ' + req.query.token,
        'User-Agent': 'Login-App'
      }
    }
    try {
      const userInfoResponse = await axios.get('https://api.github.com/user', config)
      const emailResponse = await axios.get('https://api.github.com/user/public_emails', config)

      const emailInfo = emailResponse.data.filter(object => {
        return object.primary === true
      })

      const userData = {
        name: userInfoResponse.data.name,
        email: emailInfo[0].email,
        avatar: userInfoResponse.data.avatar_url,
      }

      console.log(userData)

      res.send(emailResponse.data[0].email)
    } catch (error) {
      console.log(error)
    }
  }
}