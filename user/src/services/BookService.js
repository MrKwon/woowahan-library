import Api from '@/services/Api'

export default {
  total() {
    return Api().get('total')
  },

  index(params) {
    return Api().post('books', params)
  },

  search(params) {
    return Api().get('search', {
      params: params
    })
  }
}