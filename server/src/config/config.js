require('dotenv').config()

module.exports = {
  port: process.env.PORT || 8081,
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIAL
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIAL,
    logging: false
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  },
  naverAPI: {
    clientId: process.env.NAVER_API_CLIENT_ID,
    clientSecret: process.env.NAVER_API_CLIENT_SECRET
  },
  gitOauth: {
    clientId: process.env.GIT_OAUTH_CLIENT_ID,
    clientSecret: process.env.GIT_OAUTH_CLIENT_SECRET
  }
}