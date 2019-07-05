const axios = require('axios')
const { gitOauth } = require('../../config/config')
const qs = require('querystring')

module.exports = {
  getOauthUrl() {
    const url = 'https://github.com/login/oauth/authorize?'
    const query = qs.stringify({
      client_id: gitOauth.clientId,
      redirect_uri: "http://localhost:8080/",
      scope: 'user',
    })
    return url + query
  },
  
  async getToken(req, res) {
    const clientId = gitOauth.clientId
    const clientSecret = gitOauth.clientSecret
    const returnCode = req.query.code
    const githubTargetUrl = "https://github.com/login/oauth/access_token" +
                            "?client_id=" + clientId +
                            "&client_secret=" + clientSecret +
                            "&code=" + returnCode
    const headers = {
      headers: {
        accept: 'application/json'
      }
    }
  
    const response = await axios.post(githubTargetUrl, headers)
    const token = qs.parse(response.data).access_token

    if (!token) {
      res.status(404).send({
        error: 'lost token error'
      })
    }

    return token
  },
  
  async getUserData(req, res, token) {
    const config = {
      headers: {
        Authorization: 'token ' + token,
        'User-Agent': 'Login-App'
      }
    }
  
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
  
    return userData
  }
}