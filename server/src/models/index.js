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

db.User = require('./User')(sequelize, Sequelize)
db.Book = require('./Book')(sequelize, Sequelize)
// db.Serial = require('./Serial')(sequelize, Sequelize)

// db.Book.hasMany(db.Serial, { foreignKey: 'book_id', sourceKey: 'id' })
// db.Serial.belongsTo(db.Book, { foreignKey: 'book_id', sourceKey: 'id' })

module.exports = db