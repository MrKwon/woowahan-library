import Api from '@/services/Api'

export default {
  list(params) {
    return Api.request().post('list', params)
  },

  register(params) {
    return Api.request().post('register', params)
  }
}