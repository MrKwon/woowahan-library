const { getOauthUserUrl, getUserToken, getUserData } = require('./github/GithubUserOauth')
const { getOauthManagerUrl, getManagerToken, getManagerData } = require('./github/GithubManagerOauth')

module.exports = {
  async getOauthUser(req, res) {
    res.send(getOauthUserUrl())
  },

  async getUser(req, res) {
    try {
      const token = await getUserToken(req, res)
      const userData = await getUserData(req, res, token)
      res.send(userData)
    } catch(error) {
      res.status(404).send({ error })
    }
  },

  async getOauthManager(req, res) {
    res.send(getOauthManagerUrl())
  },

  async getManager(req, res) {
    try {
      const token = await getManagerToken(req, res)
      const userData = await getManagerData(req, res, token)
      res.send(userData)
    } catch(error) {
      res.status(404).send({ error })
    }
  }
}