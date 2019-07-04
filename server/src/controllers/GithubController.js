const axios = require('axios')
const { gitOauth } = require('../config/config')
const qs = require('querystring')

module.exports = {
  async oauth(req, res) {
    const url = 'https://github.com/login/oauth/authorize?'
    const query = qs.stringify({
      client_id: gitOauth.clientId,
      redirect_uri: "http://localhost:8080/",
      scope: 'user',
    })
    const githubAuthUrl = url + query
    res.send(githubAuthUrl)
  },

  async getUser(req, res) {
    const clientId = gitOauth.clientId
    const clientSecret = gitOauth.clientSecret
    const returnCode = req.query.code
    const githubTargetUrl = "https://github.com/login/oauth/access_token" +
                            "?client_id=" + clientId +
                            "&client_secret=" + clientSecret +
                            "&code=" + returnCode
    try {
      const response = await axios.post(githubTargetUrl, {
        headers: {
          accept: 'application/json'
        }
      })
      const token = qs.parse(response.data).access_token;

      if (!token) {
        res.status(404).send({
          error: 'lost token error'
        })
      }

      const config = {
        headers: {
          Authorization: 'token ' + token,
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

        res.send(userData)
      } catch (error) {
        console.log(error)
      }
    } catch(error) {
      console.log(error)
    }
  }
}