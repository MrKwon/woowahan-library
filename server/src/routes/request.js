const express = require('express')
const router = express.Router()
const RequestController = require('../controllers/RequestController')

router.post('/', 
  RequestController.requestBook
)

module.exports = router