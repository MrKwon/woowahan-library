import Api from '@/services/Api'

export default {
  showBookSerials(param) {
    return Api.serials().post('/book', param)
  }
}