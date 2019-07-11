const { Request, Book } = require('../models')

function parseTitle(title) {
  if (title.length >= 25) {
    return title.substring(0, 25) + '...'
  }
  return title
}

module.exports = {
  async requestBook (req, res) {
    try {
      const { link, title, author, publisher, isbn, desc } = req.body
      const book = await Book.findOne({
        where: {
          title: title
        }
      })
      if (book) {
        res.status(400).send({
          error: '이미 존재하는 책 입니다.'
        })
      }
      const request = await Request.create({
        img_url: link,
        title,
        author,
        publisher,
        isbn,
        desc
      })
      const requestJson = request.toJSON()
      res.send({
        message: `[${parseTitle(requestJson.title)}] 신청 성공`
      })
    } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(400).send({
          error: '이미 신청된 도서입니다.'
        })
      }
      res.status(400).send({
        error: '등록 실패'
      })
    }
  }
}