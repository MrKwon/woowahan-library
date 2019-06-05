const { Book } = require('../../models')

module.exports = {
  async index (req, res) {
    try {
      const books = await Book.findAll({
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