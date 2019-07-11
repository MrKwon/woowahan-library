import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
    user: null,
    isUserLoggedIn: false,
    token: null
  },

  mutations: {
    setUser(state, user) {
      state.user = user
      if (user) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },

    setToken(state, token) {
      state.token = token
      localStorage.token = token
    },

    removeUser(state) {
      state.user = null
      state.token = null
      state.isUserLoggedIn = false
      delete localStorage.token
    }
  },
  
  actions: {
    setUser({ commit }, user) {
      commit('setUser', user)
    },

    setToken({ commit }, token) {
      commit('setToken', token)
    },

    removeUser({ commit }) {
      commit('removeUser')
    }
  }
})
