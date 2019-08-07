const express = require('express')
const router = express.Router()

const AuthorizationChecker = require('../controllers/AuthorizationChecker')
const RentController = require('../controllers/RentController')

router.post('/list',
)

router.post('/rent',
  AuthorizationChecker,
  RentController.rentBook
)

router.post('/return',
  AuthorizationChecker,
  RentController.returnBook
)

module.exports = router