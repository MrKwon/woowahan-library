const express = require('express')
const router = express.Router()
const UserBookController = require('../controllers/user/UserBookController')

router.get('/total',
  UserBookController.total
)

router.post('/books',
  UserBookController.books
)

router.post('/search',
  UserBookController.search
)

router.post('/bookinfo',
  UserBookController.book
)

module.exports = router