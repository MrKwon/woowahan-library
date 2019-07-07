const express = require('express')
const router = express.Router()
const BookController = require('../controllers/BookController')
const NaverAPIController = require('../controllers/NaverAPIController')

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
