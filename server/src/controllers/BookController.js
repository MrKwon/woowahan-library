const { Book, Serial } = require('../models')
const logger = require('../logger')

module.exports = {
  async index (req, res) {
    try {
      const { page } = req.body
      let offset = 0
      if (page > 1) {
        offset = 10 * (page - 1);
      }
      const books = await Book.findAll({
        offset,
        limit: 10
      })
      for (let i = 0; i < books.length; i++) {
        const bookId = books[i].id
        const serials = await Serial.findAll({
          where: {
            book_id: bookId
          }
        })
        const count = serials.length
        books[i].dataValues.count = count
      }
      res.send(books)
    } catch (err) {
      logger.error(err)
      res.status(500).send({
        error: '도서들을 fetch 시도 하는 중에 에러 발생'
      })
    }
  },

  async total (req, res) {
    try {
      const lastId = await Book.findAll()
      res.send({
        lastId: lastId.length
      })
    } catch (err) {
      logger.error(err)
      res.status(500).send({
        error: '에러 발생'
      })
    }
  },
  
  async bookRegister (req, res) {
    try {
      const { img_url, title, author, publisher, isbn, desc } = req.body
      const book = await Book.create({
        img_url,
        title,
        author,
        publisher,
        isbn,
        desc
      })
      const bookJson = book.toJSON()
      res.send({
        message: `[${bookJson.title}] 등록 성공`
      })
    } catch (err) {
      logger.error(err)
      res.status(400).send({
        error: '등록 실패'
      })
    }
  }
}