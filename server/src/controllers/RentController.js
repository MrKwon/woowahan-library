const { User, Book, Serial, RentStatus } = require('../models')

const _RENT = true
const _ONLIBRARY = false

const _BOOK_NOT_FOUND = 'BookNotFoundError'
const _BOOK_ON_LIBRARY = 'BookOnLibraryError'
const _BOOK_ALREADY_RENT = 'BookAlreadyRentError'

const rentBook = async(req, res) => {
  const rentInfo = req.rentInfo
  try {
    const serial = await Serial.findOne({ where: { id: rentInfo.serial } })
    if (serial == null) {
      throw new Error(_BOOK_NOT_FOUND)
    }
    const foundSerial = serial.toJSON()
    if (foundSerial.status === _RENT) {
      throw new Error(_BOOK_ALREADY_RENT)
    }
    const book = await Book.findOne({ where: { id: foundSerial.book_id } })
    const foundBook = book.toJSON()
    const rental = await RentStatus.create({
      serial_id: foundSerial.id,
      user_id: rentInfo.user
    })
    Serial.update(
      { status: _RENT },
      { where: { id: foundSerial.id } }
    )
    res.send({
      message: `${foundBook.title} 대출 성공`,
      rental
    })
  } catch (error) {
    console.log(error)
    if (error.message === _BOOK_NOT_FOUND) {
      res.status(404).send({
        error: '보유중이 아닌 도서입니다.'
      })
    } else if (error.message === _BOOK_ALREADY_RENT) {
      res.status(404).send({
        error: '이미 대여 중인 도서입니다.'
      })
    } else {
      res.status(404).send({
        error
      })
    }
  }
}

const returnBook = async(req, res) => {
  const rentInfo = req.rentInfo
  try {
    const serial = await Serial.findOne({ where: { id: rentInfo.serial } })
    if (serial == null) {
      throw new Error(_BOOK_NOT_FOUND)
    }
    const foundSerial = serial.toJSON()
    if (foundSerial.status === _ONLIBRARY) {
      throw new Error(_BOOK_ALREADY_RENT)
    }
    const book = await Book.findOne({ where: { id: foundSerial.book_id } })
    const foundBook = book.toJSON()
    RentStatus.destroy({ where: {
        serial_id: foundSerial.id
      }
    })
    Serial.update(
      { status: _ONLIBRARY },
      { where: { id: foundSerial.id } }
    )
    res.send({
      message: `${foundBook.title} 반납 성공`
    })
  } catch (error) {
    console.log(error)
    if (error.message === _BOOK_NOT_FOUND) {
      res.status(404).send({
        error: '보유중이 아닌 도서입니다.'
      })
    } else if (error.message === _BOOK_ON_LIBRARY) {
      res.status(404).send({
        error: '이미 반납된 도서입니다.'
      })
    } else {
      res.status(404).send({
        error
      })
    }
  }
}

const allUserRentStatus = async(req, res) => {
  try {
    const page = req.page
    let offset = 0
    if (page > 1) {
      offset = 10 * (page - 1)
    }
    const rentStatus = await RentStatus.findAll({
      offset,
      limit: 10
    })

    let responseRentStatus = []

    for (let i = 0; i < rentStatus.length; i++) {
      const { serial_id, user_id } = rentStatus[i]
      const rentUser = await User.findOne({ where: { id: user_id } })
      const book = await Serial.findOne({ where: { id: serial_id } })
      const rentBook = await Book.findOne({ where: { id: book.id } })

      const id = rentStatus[i].id
      const userName = rentUser.name
      const rentDate = rentStatus[i].createdAt
      const bookTitle = rentBook.title
      const serial = serial_id
      
      responseRentStatus.push({ id, userName, rentDate, bookTitle, serial })
    }

    res.send(responseRentStatus)
  } catch (error) {
    console.log(error)
    res.status(404).send({
      error
    })
  } 
}

const allUserRentHistory = (req, res) => {
  const page = req.page
}


module.exports = {
  rentBook,
  returnBook,
  allUserRentStatus
}