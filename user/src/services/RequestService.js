import Api from '@/services/Api'

export default {
  request(book) {
    return Api.request().post('', book)
  }
}