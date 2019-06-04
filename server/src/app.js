const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')
// const path = require('path')

const indexRouter = require('./routes')
const userRouter = require('./routes/user')
const manageRouter = require('./routes/manage')

const app = express()
// app.set('view engine', 'html')
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors()) // {origin: 'http://localhost:8081'}
// app.use(express.static(path.join(__dirname, 'dist')))

app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/manage', manageRouter)

sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT || 8081)
    console.log(`Server started on port ${config.port}`)
  })
