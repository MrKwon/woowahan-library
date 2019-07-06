const { getOauthUrl, getToken, getUserData } = require('./github/GithubOauth')

module.exports = {
  async getOauth(req, res) {
    res.send(getOauthUrl())
  },

  async getUser(req, res) {
    try {
      const token = await getToken(req, res)
      const userData = await getUserData(req, res, token)
      res.send(userData)
    } catch(error) {
      res.status(404).send({ error })
    }
  }
}