import Api from '@/services/Api'

export default {
  all() {
    return Api.users().post('all')
  },

  update(params) {
    return Api.users().post('update', params)
  }
}