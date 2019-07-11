<template>
  <v-container>
    <v-layout class="white elevation-2" column ma-2>
      <v-toolbar class="book_list_toolbar black" flat dense dark>
        <v-toolbar-title>회원 목록</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-layout row ma-2 pr-4 pl-4>
        <v-flex xs1 pr-2 pl-2>
          번호
        </v-flex>
        <v-flex xs3 pr-2 pl-2>
          이메일
        </v-flex>
        <v-flex xs3 pr-2 pl-2>
          이름
        </v-flex>
        <v-flex xs2 pr-2 pl-2>
          현재 권한
        </v-flex>
        <v-flex xs3 pr-2 pl-2>
          변경할 권한
        </v-flex>
      </v-layout>
      <v-layout v-if="parsedUsers.length === 0"
        justify-center align-center pa-5>
        No Data
      </v-layout>
      <div v-for="user in parsedUsers"
        :key="user.id">
        <v-layout row ma-2 pr-4 pl-4>
          <v-flex xs1 pr-2 pl-2>
            <v-layout fill-height justify-center align-center>
              {{ user.id }}
            </v-layout>
          </v-flex>
          <v-flex xs3 pr-2 pl-2>
            <v-layout fill-height justify-center align-center>
              {{ user.email}}
            </v-layout>
          </v-flex>
          <v-flex xs3 pr-2 pl-2>
            <v-layout fill-height justify-center align-center>
              {{ user.name }}
            </v-layout>
          </v-flex>
          <v-flex xs2 pr-2 pl-2>
            <v-layout fill-height justify-center align-center>
              {{ user.authorization }}
            </v-layout>
          </v-flex>
          <v-flex xs3 pr-2 pl-2>
            <v-layout fill-height justify-center align-center>
              <v-overflow-btn
                v-on:change="dialog = true, selectedUser = user;"
                v-model="user.newAuthorization"
                :items="user_authorizations"
                label="변경할 권한"
              ></v-overflow-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </div>
    </v-layout>
    <div class="text-xs-center">
    <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card>
          <v-card-title
            class="red headline"
            primary-title
          >
            주의
          </v-card-title>

          <v-card-text>
            <div>이름 : {{ selectedUser.name }}</div>
            <div>이메일 : {{ selectedUser.email }}</div>
            <div>변경전 권한 : {{ selectedUser.authorization }}</div>
            <div>변경후 권한 : {{ selectedUser.newAuthorization }}</div>
            <br>
            <div>권한을 변경 하시겠습니까?</div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="error"
              flat
              @click="cancelButtonHandler()"
            >
              취소
            </v-btn>
            <v-btn
              color="primary"
              flat
              @click="confirmButtonHander(selectedUser)"
            >
              확인
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-snackbar
        v-model="snackbar"
        bottom
        :timeout=1500
      >
        {{ snackbarMessage }}
        <v-btn
          color="pink"
          flat
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
    </div>
  </v-container>
</template>

<script>
import UsersServices from '@/services/UsersService'

export default {
  data: () => ({
    parsedUsers: [],
    user_authorizations: ['none', 'user', 'manager', 'god'],
    dialog: false,
    selectedUser: {
      email: '',
      name: '',
      authorization: ''
    },
    snackbar: false,
    snackbarMessage: '',
  }),

  async beforeMount() {
    this._initiateUsers()
  },

  methods: {
    hi: function(user) {
      console.log(user)
    },

    async _initiateUsers() {
      this.parsedUsers = (await UsersServices.all()).data.users
    },

    async cancelButtonHandler() {
      this.dialog = false
      this._initiateUsers()
    },

    async confirmButtonHander(user) {
      this.dialog = false
      this.snackbar = true
      try {
        const response = await UsersServices.update(user)
        this.snackbarMessage = response.data.message;
        this._initiateUsers()
      } catch (error) {
        this.snackbar = true
        this.snackbarMessage = error.response.data.message
        this._initiateUsers()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>