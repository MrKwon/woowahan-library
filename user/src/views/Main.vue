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
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import BookList from '@/components/BookList'
import BookService from '@/services/BookService'
import GithubService from '@/services/GithubService'
import store from '../store'

const _snackBarTimeout = 2000
const _error = 'error'
const _success = 'success'

const _requestFailedErrorMessage = 'something went wrong. request failed.'
const _invalidTokenErrorMessage = 'something went wrong. can\'t get access token.'
const _successLoginMessage = 'Welcome ! '

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
    this.length = Math.floor(((await BookService.total()).data.lastId - 1) / 10) + 1
    this.userLogin()
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0,0)
    },

    dispatchUser(user) {
      this.$store.dispatch('setUser', user)
    },

    initializeSnackBar() {
      setTimeout(() => {
        this.snackbar.error = ''
        this.snackbar.color = ''
      }, _snackBarTimeout + 500)
    },

    popSnackbar(message, color) {
      this.snackbar.snackbar = true
      this.snackbar.error = message
      this.snackbar.color = color
    },

    async userLogin() {
      const params = new URLSearchParams(window.location.search)
      if (params.has('code')) {
        const code = params.get('code')
        try {
          const response = await GithubService.user({ params: { code } })
          if (!response.data) {
            this.popSnackbar(_invalidTokenErrorMessage, _error)
            this.initializeSnackBar()
          } else {
            this.popSnackbar(_successLoginMessage, _success)
            this.dispatchUser(response.data)
            this.$router.push('/')
          }
        } catch (error) {
          this.setSnackbarError(_requestFailedErrorMessage, _error)
          this.initializeSnackBar()
          this.$router.push('/')
        }
      }
    }
  }
}
</script>
