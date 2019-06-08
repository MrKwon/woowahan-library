const express = require('express')
const router = express.Router()
const UserBookController = require('../controllers/user/UserBookController')

router.get('/total',
  UserBookController.total
)

router.post('/books',
  UserBookController.index
)

router.get('/search',
  UserBookController.search
)

module.exports = router