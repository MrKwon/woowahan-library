<template>
  <v-container>
    <v-layout class="white elevation-2" column ma-2>
      <v-toolbar class="book_list_toolbar black" flat dense dark>
        <v-toolbar-title>신청 도서 목록</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-on:click="refresh()">
          새로고침
        </v-btn>
      </v-toolbar>
      <!--TODO: 리스트 컴포넌트로-->
      <v-layout row ma-2 pr-4 pl-4>
        <v-flex xs3 pr-2 pl-2>
          제목
        </v-flex>
        <v-flex xs1 pr-2 pl-2>
          작가
        </v-flex>
        <v-flex xs1 pr-2 pl-2>
          출판사
        </v-flex>
        <v-flex xs3 pr-2 pl-2>
          ISBN
        </v-flex>
        <v-flex xs2 pr-2 pl-2>
          신청자
        </v-flex>
        <v-flex xs2 pr-2 pl-2>
          처리완료
        </v-flex>
      </v-layout>
      <v-layout v-if="requests.length === 0 || requests === null"
        justify-center align-center pa-5>
        No Data
      </v-layout>
      <div v-for="request in requests"
        :key="request.title">
        <v-layout row ma-2 pr-4 pl-4>
          <v-flex xs3 pr-2 pl-2>
            {{ request.title }}
          </v-flex>
          <v-flex xs1 pr-2 pl-2>
            {{ request.author }}
          </v-flex>
          <v-flex xs1 pr-2 pl-2>
            {{ request.publisher }}
          </v-flex>
          <v-flex xs3 pr-2 pl-2>
            {{ request.isbn }}
          </v-flex>
          <v-flex xs2 pr-2 pl-2>
            {{ request.user }}
          </v-flex>
          <v-flex xs2 pr-2 pl-2>
            <v-btn small v-on:click="registerItemButtonHandler(request)">
              처리완료
            </v-btn>
          </v-flex>
        </v-layout>
      </div>
    </v-layout>
    <!-- <div class="text-xs-center"> -->
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            처리 확인
          </v-card-title>

          <v-card-text>
            {{ selectedItem.title }} 을 보유 장서로 등록하시겠습니까?
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              flat
              v-on:click="register(selectedItem); dialog = false"
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
    <!-- </div> -->
  </v-container>
</template>

<script>
import RequestService from '@/services/RequestService'

export default {
  data: () => ({
    requests: [],
    page: 1,
    dialog: false,
    selectedItem: {
      title: ''
    },
    snackbar: false,
    snackbarMessage: ''
  }),

  watch: {
    page: async function () {
      this.requests = (await RequestService.list()).data
    }
  },

  methods: {
    async register(item) {
      try {
        const response = await RequestService.register({ id: item.id })
        this.requests = (await RequestService.list()).data
        this.snackbar = true
        this.snackbarMessage = response.data.message
      } catch (error) {
        console.log(error)
      }
    },

    registerItemButtonHandler(request) {
      this.dialog = true
      this.selectedItem = request
    },

    async refresh() {
      this.requests = (await RequestService.list()).data
    }
  },

  async beforeMount () {
    this.requests = (await RequestService.list()).data
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>