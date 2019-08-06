const express = require('express')
const router = express.Router()
const SerialController = require('../controllers/SerialController')

router.post('/book',
  SerialController.showBookSerials
)

router.post('/', 
  SerialController.addSerial
)

// router.delete('/serial', )

module.exports = router