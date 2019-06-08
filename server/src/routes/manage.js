const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')
const AuthControllerPolicy = require('../policies/AuthContollerPolicy')
const BookController = require('../controllers/BookController')
const NaverAPIController = require('../controllers/NaverAPIController')

// TODO: isAuthentificated 미들웨어 구현

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

router.get('/book/total',
  BookController.total
)

router.post('/book/index',
  BookController.index
)

router.post('/book/register',
  BookController.bookRegister
)

module.exports = router
