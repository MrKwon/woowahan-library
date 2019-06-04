import Api from '@/services/Api'

export default {
  search(toSearchTitle) {
    return Api().post('book', toSearchTitle)
  }
}