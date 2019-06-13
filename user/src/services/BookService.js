import Api from '@/services/Api'

export default {
  total() {
    return Api().get('total')
  },

  books(params) {
    return Api().post('books', params)
  },

  search(params) {
    return Api().post('search', params)
  },

  book(params) {
    return Api().post('bookinfo', params)
  }
}