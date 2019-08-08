import Api from '@/services/Api'

export default {
  rentBook (header, param) {
    return Api.rent(header).post('rent', param)
  },

  returnBook (header, param) {
    return Api.rent(header).post('return', param)
  },

  allUserRentStatus(header, param) {
    return Api.rent(header).post('list', param)
  }
}