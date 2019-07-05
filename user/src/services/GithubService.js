import Api from '@/services/Api'

export default {
  login() {
    return Api.github().get('/oauth')
  },
  
  user(params) {
    return Api.github().get('user', params)
  }
}