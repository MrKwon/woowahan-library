import Api from '@/services/Api'

export default {
  search(params) {
    return Api.naverApi().post('search', params)
  }
}