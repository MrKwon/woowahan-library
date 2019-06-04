const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')
const AuthControllerPolicy = require('../policies/AuthContollerPolicy')
const BookController = require('../controllers/BookController')
const NaverAPIController = require('../controllers/NaverAPIController')

router.get('/', (req, res) => {
  res.send({
    message: 'this is manage router'
  })
})

router.post('/register',
  AuthControllerPolicy.register,
  AuthController.register
)

router.post('/login',
  AuthController.login
)

router.post('/book/search',
  NaverAPIController.bookSearch
)

router.get('/books',
  BookController.index
)

router.post('/book/register',
  BookController.bookRegister
)

module.exports = router
