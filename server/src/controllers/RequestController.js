const { Request, Book, User } = require('../models')

function parseTitle(title) {
  if (title.length >= 25) {
    return title.substring(0, 25) + '...'
  }
  return title
}

module.exports = {
  async requestBook (req, res) {
    try {
      const { image, title, author, publisher, isbn, description } = req.body.book
      const { user_id } = req.body
      const book = await Book.findOne({
        where: {
          title: title
        }
      })
      if (book) {
        res.status(400).send({
          error: '현재 비치된 도서입니다.'
        })
        return
      }
      const request = await Request.create({
        img_url: image,
        title,
        author,
        publisher,
        isbn,
        desc: description,
        user_id
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
  },

  async requestList (req, res) {
    try {
      const requests = await Request.findAll()
      const parsedRequests = []
      for (let i = 0; i < requests.length; i++) {
        const element = requests[i]
        const user = await User.findOne({
          where: {
            id: element.user_id
          }
        })
        const parsedRequest = {
          id: element.id,
          title: element.title,
          isbn: element.isbn,
          author: element.author,
          publisher: element.publisher,
          user: user.name,
        }
        parsedRequests.push(parsedRequest)
      }
      res.send(parsedRequests)
    } catch (error) {
      res.status(404).send({
        error: error
      })
    }
  },

  async register(req, res) {
    try {
      const { id } = req.body
      const requestedBook = await Request.findOne({ where: { id } })
      await Request.destroy({ where: { id } })
      const { img_url, title, author, publisher, isbn, desc } = requestedBook
      const book = await Book.create({
        img_url,
        title,
        author,
        publisher,
        isbn,
        desc
      })
      res.send({
        message: "등록 성공"
      })
    } catch(error) {
      res.status(400).send({
        error: error
      })
    }
  }
}