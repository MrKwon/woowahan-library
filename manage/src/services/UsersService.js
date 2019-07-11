import Api from '@/services/Api'

export default {
  all() {
    return Api.users().get('all')
  },

  update(params) {
    return Api.users().post('update', params)
  }
}