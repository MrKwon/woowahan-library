const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')
const AuthControllerPolicy = require('../policies/AuthContollerPolicy')

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

module.exports = router
