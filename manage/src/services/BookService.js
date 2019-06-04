import Api from '@/services/Api'

export default {
  index() {
    return Api().get('books')
  },
  search(toSearchTitle) {
    return Api().post('book/search', toSearchTitle)
  },
  bookRegister(bookInfo) {
    return Api().post('book/register', bookInfo)
  }
}