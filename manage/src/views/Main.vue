<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <Signin/>
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title :class="dialogTitle">에러</v-card-title>
          <v-card-text>{{ dialogMessage }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :color="dialogTitle" flat @click="this._dialogCloseButtonHandler">돌아가기</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import GithubService from '@/services/GithubService'
import Signin from '@/components/Signin'
// import store from '@/store'

const _invalidAccessError = '잘못된 접근입니다.'
const _accessTokenFailed = '액세스 토큰을 받아올 수 없습니다.'

const _error = 'error'
const _warning = 'orange'

export default {
  data: () => ({
    dialog: false,
    dialogMessage: '',
    dialogTitle: '',
  }),

  components: {
    Signin,
  },

  async beforeMount() {
    this.login()
  },

  methods: {
    async login() {
      const params = new URLSearchParams(window.location.search)
      if (params.has('code')) {
        const code = params.get('code')
        try {
          const response = await GithubService.manager({ params: { code } })
          if (!response.data) {
            this._showDialog(_accessTokenFailed, _error)
          } else {
            if (response.data.authorization === 'none' || response.data.authorization === 'user') {
              this._showDialog('권한이 없습니다.', _warning)
            } else {
              this.$store.dispatch('setUser', response.data)
              this.$router.push('dashboard')
            }
          }
        } catch (error) {
          this._showDialog(_invalidAccessError, _error)
        }
      }
    },

    _showDialog(message, color) {
      this.dialogTitle = color + ' headline'
      this.dialogMessage = message
      this.dialog = true
    },
    
    _dialogCloseButtonHandler() {
      this.dialog = false
      this.dialogMessage = ''
      this.$router.push('/')
    }

  },

  // beforeRouteEnter(to, from, next) {
  //   console.log(to)
  //   console.log(from)
  // }
}
</script>
