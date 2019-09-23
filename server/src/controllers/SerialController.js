const { Serial } = require('../models')
const logger = require('../logger')

const showBookSerials = async(req, res) => {
  try {
    const { bookId } = req.body
    const bookSerials = await Serial.findAll({
      where: {
        book_id: bookId
      }
    })
    res.send({
      bookSerials
    })
  } catch (error) {
    logger.error(`[SerialController.js] : ${error}`)
    res.status(404).send({
      error
    })
  }
}

const addSerial = async(req, res) => {
  try {
    const { bookId } = req.body
    const savedSerial = await Serial.create({
      book_id: bookId
    })
    const serialJSON = savedSerial.toJSON()
    res.send({
      serial: serialJSON
    })
  } catch (error) {
    logger.error(`[SerialController.js] : ${error}`)
    res.status(404).send({
      error
    })
  }
}

const removeSerial = async(req, res) => {
  try {
    const { id } = req.query
    await Serial.destroy({
      where: { id }
    })
    res.send({
      message: '삭제 성공'
    })
  } catch (error) {
    logger.error(`[SerialController.js] : ${error}`)
    res.status(404).send({
      error
    })
  }
}

module.exports = {
  showBookSerials,
  addSerial,
  removeSerial,
}