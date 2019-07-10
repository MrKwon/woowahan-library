import Api from '@/services/Api'

export default {
  index(param) {
    return Api.manager().post('book/index', param)
  },

  total() {
    return Api.manager().get('book/total')
  },

  search(toSearchTitle) {
    return Api.manager().post('book/search', toSearchTitle)
  },
  
  bookRegister(bookInfo) {
    return Api.manager().post('book/register', bookInfo)
  }
}