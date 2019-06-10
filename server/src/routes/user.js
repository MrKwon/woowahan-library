const express = require('express')
const router = express.Router()
const UserBookController = require('../controllers/user/UserBookController')

router.get('/total',
  UserBookController.total
)

router.post('/books',
  UserBookController.books
)

router.get('/search',
  UserBookController.search
)

router.get('/bookinfo',
  UserBookController.book
)

module.exports = router