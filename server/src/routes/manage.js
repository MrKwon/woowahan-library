const express = require('express')
const router = express.Router()
const BookController = require('../controllers/BookController')
const NaverAPIController = require('../controllers/NaverAPIController')

router.post('/search',
  NaverAPIController.bookSearch
)

router.get('/total',
  BookController.total
)

router.post('/index',
  BookController.index
)

router.post('/register',
  BookController.bookRegister
)

module.exports = router
