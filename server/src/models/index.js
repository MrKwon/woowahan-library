const Sequelize = require('sequelize')
const config = require('../config/config')

const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  config.db
)

db.sequelize = sequelize
db.Sequelize = Sequelize

// using table `Users` // MySQL
db.User = require('./User')(sequelize, Sequelize)

module.exports = db