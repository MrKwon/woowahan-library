import Api from '@/services/Api'

export default {
  total() {
    return Api().get('total')
  },
  index(params) {
    return Api().post('books', params)
  },
  search(keyword) {
    return Api().post('search', keyword)
  }
}