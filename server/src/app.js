const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// const path = require('path')

const indexRouter = require('./routes')
const userRouter = require('./routes/user')

const app = express()
// app.set('view engine', 'html')
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors()) // {origin: 'http://localhost:8081'}
// app.use(express.static(path.join(__dirname, 'dist')))

app.use('/', indexRouter)
app.use('/user', manageRouter)

app.listen(process.env.PORT || 8081)
