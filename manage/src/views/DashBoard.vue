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
              <!-- TODO: 현재 대출 내역을 보여주는 컴포넌트 구현 -->
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
          <v-toolbar flat dense class="book_list_toolbar white">
            <v-toolbar-title>도서 목록</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat dark color="primary" v-if="!editMode" @click="editMode = !editMode">수정</v-btn>
            <v-btn flat dark color="primary" v-if="editMode" @click="editMode = !editMode">완료</v-btn>
          </v-toolbar>
          <!--TODO: 리스트 컴포넌트로-->
          <v-layout row ma-2 pt-2 pb-2 pr-4 pl-4>
            <v-flex xs1>
              커버
            </v-flex>
            <v-flex xs3>
              제목
            </v-flex>
            <v-flex xs2>
              저자
            </v-flex>
            <v-flex xs2>
              출판사
            </v-flex>
            <v-flex xs4>
              요약
            </v-flex>
            <v-flex xs1 v-if="editMode">
              수정
            </v-flex>
          </v-layout>
          <div v-for="book in books"
            :key="book.title">
            <v-layout row ma-2 pr-4 pl-4
              v-on:click="clickclick(book.title)">
              <v-flex xs1>
                <v-img
                  v-bind:src="book.img_url"
                  max-height="300px"
                  max-width="100px"
                  aspect-ratio="0.7"/>
              </v-flex>
              <v-flex xs3>
                {{ book.title }}
              </v-flex>
              <v-flex xs2>
                {{ book.author }}
              </v-flex>
              <v-flex xs2>
                {{ book.publisher }}
              </v-flex>
              <v-flex xs4>
                {{ book.desc }}
              </v-flex>
              <v-flex xs1 v-if="editMode">
                <v-btn
                  flat dark color="primary"
                  v-on:click="login">
                  수정하기
                </v-btn>
              </v-flex>
            </v-layout>
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
    books: null,
    editMode: false
  }),
  async mounted () {
    this.books = (await BookService.index()).data
  },
  methods: {
    clickclick(param) {
      alert(param)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book_list_toolbar {
  border-bottom: 1px solid black;
}
</style>