import Api from '@/services/Api'

export default {
  login() {
    return Api.github().get('oauthmanager')
  },
  
  manager(params) {
    return Api.github().post('manager', params)
  }
}