require('dotenv').config()

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIAL
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}