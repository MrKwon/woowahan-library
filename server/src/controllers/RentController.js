const { Book, Serial, RentStatus } = require('../models')

const _RENT = true
const _ONLIBRARY = false

const _BOOK_NOT_FOUND = 'BookNotFoundError'
const _BOOK_ON_LIBRARY = 'BookOnLibraryError'
const _BOOK_ALREADY_RENT = 'BookAlreadyRentError'

const rentBook = async(req, res) => {
  const rentInfo = req.rentInfo
  console.log(rentInfo)
  try {
    // serial 찾기
    const serial = await Serial.findOne({ where: { id: rentInfo.serial } })
    if (serial == null) {
      throw new Error(_BOOK_NOT_FOUND)
    }
    const foundSerial = serial.toJSON()
    // 대출중인가 확인 
    if (foundSerial.status === _RENT) {
      throw new Error(_BOOK_ALREADY_RENT)
    }
    // 해당 도서를 찾는다.. Return 용
    const book = await Book.findOne({ where: { id: foundSerial.book_id } })
    const foundBook = book.toJSON()
    // 대여 처리
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
    // serial 찾기
    const serial = await Serial.findOne({ where: { id: rentInfo.serial } })
    if (serial == null) {
      throw new Error(_BOOK_NOT_FOUND)
    }
    const foundSerial = serial.toJSON()
    // 이미 도서관에 있는지 확인 
    if (foundSerial.status === _ONLIBRARY) {
      throw new Error(_BOOK_ALREADY_RENT)
    }
    // 해당 도서를 찾는다.. Return 용
    const book = await Book.findOne({ where: { id: foundSerial.book_id } })
    const foundBook = book.toJSON()
    // 반납 처리
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


module.exports = {
  rentBook,
  returnBook
}