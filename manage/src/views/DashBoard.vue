<template>
  <v-container fluid>
    <v-layout column>
      <v-layout row>
        <v-flex xs6>
          <v-layout class="white elevation-2" column ma-2>
            <v-toolbar flat dense class="black" dark>
              <v-toolbar-title>현재 대출 내역</v-toolbar-title>
            </v-toolbar>
            <v-layout column pa-2>
              <div>현재 대출 내역은</div>
              <div>ㅇㅇㅇ : 1권 / 5권</div>
              <div>ㅌㅌㅌ : 2권 / 4권</div>
            </v-layout>
          </v-layout>
        </v-flex>
        <v-flex xs6>
          <v-layout class="white elevation-2" column ma-2 xs6>
            <v-toolbar flat dense class="black" dark>
              <v-toolbar-title>책 관리</v-toolbar-title>
            </v-toolbar>
            <v-btn
              dark
              class="primary"
              to='book/add'>
              새로운 도서 추가
            </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-flex xs12>
        <v-layout class="white elevation-2" column ma-2>
          <v-toolbar flat dense class="black" dark>
            <v-toolbar-title>도서 목록</v-toolbar-title>
          </v-toolbar>
          <!--TODO: 리스트 컴포넌트로 발전시키기-->
          <div v-for="book in books"
            :key="book.title">
            <v-img
              v-bind:src="book.img_url"
              max-height="300px"
              max-width="100px"
              aspect-ratio="0.7"/>
            -
            {{ book.title }}
            -
            {{ book.author }}
            -
            {{ book.publisher }}
            -
            {{ book.desc }}
          </div>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BookService from '@/services/BookService'

export default {
  data: () => ({
    books: null
  }),
  async mounted () {
    this.books = (await BookService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>