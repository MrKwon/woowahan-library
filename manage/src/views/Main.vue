<template>
  <v-container>
    <v-layout align-center justify-center>
      <Signin v-if="!this.loadingDialog"/>
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
    <div class="text-xs-center">
      <v-dialog
        v-model="loadingDialog"
        width="500"
      >
        <v-card>
          <v-card-title
            class="black"
          >
            <div style="color: white; font-size: 20px;">
            로그인 중...
            </div>
          </v-card-title>

          <v-layout pa-5 justify-center>
            <v-progress-circular
              :size="70"
              :width="7"
              color="black"
              indeterminate
            ></v-progress-circular>
          </v-layout>
        </v-card>
      </v-dialog>
    </div>
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
    loadingDialog: false
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
        this._loadingDialogChaneger()
        const code = params.get('code')
        try {
          const response = await GithubService.manager({ code: code })
          if (!response.data) {
            this._loadingDialogChaneger()
            this._showDialog(_accessTokenFailed, _error)
          } else {
            const { user } = response.data
            if (user.authorization === 'none' || user.authorization === 'user') {
              this._loadingDialogChaneger()
              this._showDialog('권한이 없습니다.', _warning)
            } else {
              this.$store.dispatch('setUser', response.data)
              this._loadingDialogChaneger()
              this.$router.push('dashboard')
            }
          }
        } catch (error) {
          this._loadingDialogChaneger()
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
    },

    _loadingDialogChaneger() {
      if (this.loadingDialog) {
        this.loadingDialog = false
      } else {
        this.loadingDialog = true
      }
    }

  }
}
</script>
