const Sequelize = require('sequelize')
const config = require('../config/config')

const db = {}

const sequelize = new Sequelize(
  process.env.NODE_ENV === 'production' ? config.production.database : config.development.database,
  process.env.NODE_ENV === 'production' ? config.production.username : config.development.username,
  process.env.NODE_ENV === 'production' ? config.production.password : config.development.password,
  process.env.NODE_ENV === 'production' ? config.production : config.development
)

db.sequelize = sequelize
db.Sequelize = Sequelize

db.User = require('./User')(sequelize, Sequelize)
db.Book = require('./Book')(sequelize, Sequelize)
db.Serial = require('./Serial')(sequelize, Sequelize)
db.Request = require('./Request')(sequelize, Sequelize)
db.RentStatus = require('./RentStatus')(sequelize, Sequelize)

// Book 1 : N Serial
db.Book.hasMany(db.Serial, { foreignKey: 'book_id', sourceKey: 'id' })
db.Serial.belongsTo(db.Book, { foreignKey: 'book_id', sourceKey: 'id' })

// User 1 : N Request
db.User.hasMany(db.Request, { foreignKey: 'user_id', sourceKey: 'id' })
db.Request.belongsTo(db.User, { foreignKey: 'user_id', sourceKey: 'id' })


module.exports = db