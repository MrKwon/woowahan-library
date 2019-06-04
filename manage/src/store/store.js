import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  stirct: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    authorization: false
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser(state, user) {
      state.user = user
    },
    setAuthorization(state, authorization) {
      state.authorization = authorization
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token)
    },
    setUser({ commit }, user) {
      commit('setUser', user)
    },
    setAuthorization({ commit }, authorization) {
      commit('setAuthorization', authorization)
    }
  }
})