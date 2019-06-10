import Api from '@/services/Api'

export default {
  total() {
    return Api().get('total')
  },

  books(params) {
    return Api().post('books', params)
  },

  search(params) {
    return Api().get('search', {
      params: params
    })
  },

  book(params) {
    return Api(). get('bookinfo', {
      params: params
    })
  }
}