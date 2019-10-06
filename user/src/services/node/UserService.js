import Api from '@/services/Api'

export default {
  editName(param) {
    return Api.user().patch('editname', param)
  }
}