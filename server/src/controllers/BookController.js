const { Book } = require('../models')

module.exports = {
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
      console.log(bookJson)
      res.status(200).send({
        message: `[${bookJson.title}] 등록 성공`
      })
    } catch (err) {
      res.status(400).send({
        error: '등록 실패'
      })
    }
  }
}