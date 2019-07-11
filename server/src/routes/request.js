const express = require('express')
const router = express.Router()
const RequestController = require('../controllers/RequestController')

router.post('/', 
  RequestController.requestBook
)

router.post('/list',
  RequestController.requestList
)

router.post('/register',
  RequestController.register
)

module.exports = router