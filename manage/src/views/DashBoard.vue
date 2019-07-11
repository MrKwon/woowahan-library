<template>
  <v-container>
    <v-layout column>
      <v-layout row>
        <v-flex xs6>
          <v-layout class="white elevation-2" column ma-2>
            <v-toolbar flat dense class="black" dark>
              <v-toolbar-title>현재 대출 내역</v-toolbar-title>
            </v-toolbar>
            <v-layout column pa-2>
              <!-- TODO: 현재 대출 내역을 보여주는 컴포넌트 구현 -->
              <!-- <div>현재 대출 내역은</div>
              <div>ㅇㅇㅇ : 1권 / 5권</div>
              <div>ㅌㅌㅌ : 2권 / 4권</div> -->
            </v-layout>
          </v-layout>
        </v-flex>
        초라한 대시보드...
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import BookService from '@/services/BookService'

export default {
  data: () => ({
    books: null,
    editMode: false,
    page: 1,
    length: 1
  }),

  watch: {
    page: async function () {
      this.books = (await BookService.index({ page: this.page })).data
    }
  },

  methods: {
    clickclick(param) {
      alert(param)
    }
  },

  async beforeMount () {
    this.books = (await BookService.index({ page: this.page })).data
    this.length = Math.floor(((await BookService.total()).data.lastId - 1) / 10) + 1
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book_list_toolbar {
  border-bottom: 1px solid black;
}
</style>