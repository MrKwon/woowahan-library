const { Book } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const books = await Book.findAll({
        limit: 10
      })
      res.send(books)
    } catch (err) {
      res.status(500).send({
        error: '도서들을 fetch 시도 하는 중에 에러 발생'
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
      console.log(err)
      res.status(400).send({
        error: '등록 실패'
      })
    }
  }
}