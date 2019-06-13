const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// const session = require('express-session')
const { sequelize } = require('./models')
const config = require('./config/config')
const logger = require('./logger')
const helmet = require('helmet')
const hpp = require('hpp')

const indexRouter = require('./routes')
const userRouter = require('./routes/user')
const manageRouter = require('./routes/manage')

const app = express()

app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'))
  app.use(helmet())
  app.use(hpp())
} else {
  app.use(morgan('dev'))
}

app.use(bodyParser.json())

app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/manage', manageRouter)

// const sessionOption = {
//   resave: false,
//   saveUninitialized: false,
//   secret: process.env.COOKIE_SECRET,
//   cookie: {
//     httpOnly: true,
//     secure: false,
//   },
// }
// if (process.env.NODE_ENV === 'production') {
//   sessionOption.proxy = true
//   sessionOption.cookie.secure = true
// }
// app.use(session(sessionOption))

sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT || 8081)
    logger.info(`Server started on port ${process.env.PORT}`)
  })
