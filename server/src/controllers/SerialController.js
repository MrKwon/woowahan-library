const { Book, Serial } = require('../models')

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
    res.status(404).send({
      error
    })
  }
}

module.exports = {
  showBookSerials,
  addSerial,
}