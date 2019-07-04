import Api from '@/services/Api'

export default {
  login() {
    return Api.base().get('github')
  }
}