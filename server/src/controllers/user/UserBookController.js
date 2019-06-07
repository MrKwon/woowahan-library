const { Book } = require('../../models')

module.exports = {
  async total (req, res) {
    try {
      const lastId = await Book.findAll()
      res.send({
        lastId: lastId.length
      })
    } catch (err) {
      res.status(500).send({
        error: '에러 발생'
      })
    }
  },
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
      const parsedBooks = []
      books.forEach(element => {
        const parsedBook = {
          id: element.id,
          img_url: element.img_url,
          title: element.title,
          author: element.author,
          publisher: element.publisher
        }
        parsedBooks.push(parsedBook)
      })
      res.send(parsedBooks)
    } catch (err) {
      res.status(500).send({
        error: '도서들을 fetch 시도 하는 중에 에러 발생'
      })
    }
  }
}