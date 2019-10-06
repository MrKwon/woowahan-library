<template>
  <v-app>
    <BookList v-bind:books="books"/>
    <v-layout row justify-center mb-2>
      <v-pagination
        dark
        color="#A4A4A4"
        v-model="page"
        :length="this.length"
        v-if="this.length !== 1"
        circle
      ></v-pagination>
    </v-layout>
    <!-- TODO: 컴포넌트로 분리 -->
    <v-btn
      v-if="$store.state.isUserLoggedIn"
      fixed bottom right fab dark color="black"
      to="/rent"
    >
      <v-img
        max-height="20"
        max-width="20"
        :src="require('@/assets/qr-code.png')"></v-img>
    </v-btn>

    <!-- TODO: 컴포넌트로 분리 -->
    <v-snackbar
      v-model="snackbar.snackbar"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
    >
      {{ snackbar.error }}
      <v-btn
        dark
        flat
        @click="snackbar = false"
      >
        닫기
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import BookService from '@/services/node/BookService'
import GithubService from '@/services/node/GithubService'

import BookList from '@/components/BookList'

const _snackBarTimeout = 2000

const _error = 'error'
const _success = 'success'

const _requestFailedErrorMessage = '요청에 실패 하였습니다.'
const _invalidTokenErrorMessage = '액세스 토큰을 받아올 수 없습니다.'
const _successLoginMessage = '환영합니다 ! '

export default {
  data: () => ({
    books: [],
    page: 1,
    length: 1,
    snackbar: {
      snackbar: false,
      color: 'error',
      timeout: _snackBarTimeout,
      error: '',
    }
  }),

  watch: {
    page: async function(nextPage) {
      this.scrollToTop()
      this.books = (await BookService.books({ page: nextPage })).data
    }
  },

  components: {
    BookList,
  },

  async beforeMount() {
    this.books = (await BookService.books({ page: this.page })).data
    this.length = Math.floor(((await BookService.total()).data.lastId - 1) / 12) + 1
    this.userGithubLogin()
    this.tokenLogin()
    this.messageShower()
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0,0)
    },

    async userGithubLogin() {
      const params = new URLSearchParams(window.location.search)
      if (params.has('code')) {
        const code = params.get('code')
        try {
          const response = await GithubService.user({ code: code })
          if (!response.data) {
            this._popSnackbar(_invalidTokenErrorMessage, _error)
            this._initializeSnackBar()
          } else {
            this._dispatchUser(response.data)
            this._popSnackbar(_successLoginMessage + this.$store.state.user.user.name + '님', _success)
            this.$router.push('/')
          }
        } catch (error) {
          this._popSnackbar(_requestFailedErrorMessage, _error)
          this._initializeSnackBar()
          this.$router.push('/')
        }
      }
    },

    _dispatchUser(data) {
      this.$store.dispatch('setUser', data)
      this.$store.dispatch('setToken', data.token)
    },

    _initializeSnackBar() {
      setTimeout(() => {
        this.snackbar.error = ''
        this.snackbar.color = ''
      }, _snackBarTimeout + 500)
    },

    _popSnackbar(message, color) {
      this.snackbar.snackbar = true
      this.snackbar.error = message
      this.snackbar.color = color
    },

    async tokenLogin() {
      if (localStorage.token && !this.$store.state.isUserLoggedIn) {
        try {
          const response = await GithubService.tokenAuth(localStorage.token)
          this._dispatchUser(response.data)
          this._popSnackbar(_successLoginMessage + this.$store.state.user.user.name + '님', _success)
        } catch (error) {
          this._popSnackbar(error, _error)
        }
      }
    },

    messageShower() {
      if (this.$route.params.message) {
        this._popSnackbar(this.$route.params.message, _success)
      }
      if (this.$route.params.error) {
        this._popSnackbar(this.$route.params.error, _error)
      }
    }
  }
}
</script>
