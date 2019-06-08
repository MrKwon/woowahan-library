import Api from '@/services/Api'

export default {
  index(param) {
    return Api().post('book/index', param)
  },

  total() {
    return Api().get('book/total')
  },

  search(toSearchTitle) {
    return Api().post('book/search', toSearchTitle)
  },
  
  bookRegister(bookInfo) {
    return Api().post('book/register', bookInfo)
  }
}