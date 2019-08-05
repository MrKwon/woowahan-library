<template>
  <v-layout class="white elevation-2" column ma-2>
    <v-toolbar class="book_list_toolbar black" flat dense dark>
      <v-toolbar-title>도서 목록</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="white" v-if="!editMode" @click="editMode = !editMode">관리모드</v-btn>
      <v-btn flat color="white" v-if="editMode" @click="editMode = !editMode">완료</v-btn>
    </v-toolbar>
    <!--TODO: 리스트 컴포넌트로-->
    <v-layout row ma-1 pa-2>
      <v-flex xs1>
        커버
      </v-flex>
      <v-flex xs3>
        제목
      </v-flex>
      <v-flex xs3>
        저자
      </v-flex>
      <v-flex xs3>
        출판사
      </v-flex>
      <v-flex xs3>
        소장 부수
      </v-flex>
    </v-layout>
    <div
      v-for="book in books"
      :key="book.title">
      <v-hover v-slot:default="{ hover }">
        <v-card row style="width: 100%"
          :elevation="hover ? 12 : 0"
          v-on:click="bookEditDialog = true; selectedBook = book;">
          <v-layout ma-1 pa-2>
            <v-flex xs1>
              <v-img
                v-bind:src="book.img_url"
                max-height="300px"
                max-width="100px"
                aspect-ratio="0.7"/>
            </v-flex>
            <v-flex xs3>
              <v-layout column justify-center align-center fill-height>
                <div>
                  {{ book.title }}
                </div>
              </v-layout>
            </v-flex>
            <v-flex xs3>
              <v-layout column justify-center align-center fill-height>
                <div>
                  {{ book.author }}
                </div>
              </v-layout>
            </v-flex>
            <v-flex xs3>
              <v-layout column justify-center align-center fill-height>
                <div>
                  {{ book.publisher }}
                </div>
              </v-layout>
            </v-flex>
            <v-flex xs3>
              <v-layout column justify-center align-center fill-height>
                <div>
                  1 부
                </div>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card>
      </v-hover>
    </div>
      <div class="text-xs-center">
      <v-layout justify-center ma-3>
        <v-flex xs8>
          <v-pagination
            v-model="page"
            :length="this.length"
          ></v-pagination>
        </v-flex>
      </v-layout>
    </div>
    <v-layout row justify-center>
      <v-dialog v-model="bookEditDialog" persistent max-width="600px">
        <v-card>
          <v-toolbar flat dense dark>
            <v-toolbar-title>
              <span><b>{{titleParser(selectedBook.title)}}</b> 정보 수정</span>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-layout colum pb-2>
              <v-layout row>
                <v-flex xs3>
                  <v-img
                    v-bind:src="selectedBook.img_url"
                    max-height="300px"
                    max-width="100px"
                    aspect-ratio="0.7"/>
                </v-flex>
                <v-flex xs9>
                  <v-layout column fill-height justify-center>
                    <v-layout column xs12 justify-center>
                      <BookEditDialogTitle title="ISBN" v-bind:content="selectedBook.isbn"/>
                      <BookEditDialogTitle title="저자" v-bind:content="selectedBook.author"/>
                      <BookEditDialogTitle title="출판사" v-bind:content="selectedBook.publisher"/>
                    </v-layout>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-layout>
          </v-card-text>
          <v-toolbar flat dense dark height="35">
            <v-toolbar-title>
              <span>보유 장서 일련번호</span>
            </v-toolbar-title>
          </v-toolbar>
          <div v-for="i in 5"
            :key="i">
            <div>1권</div>
          </div>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" flat @click="bookEditDialog = false">취소</v-btn>
            <v-btn color="blue darken-1" flat @click="bookEditDialog = false">저장</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-layout>
</template>

<script>
import BookService from '@/services/BookService'

import BookEditDialogTitle from '@/components/BookEditDialogTitle'

export default {
  data: () => ({
    books: null,
    selectedBook: {
      img_url: '',
      title: '',
      author: '',
      publisher: '',
      desc: '',
      isbn: '',
    },
    editMode: false,
    page: 1,
    length: 1,
    bookEditDialog: false,
  }),

  components: {
    BookEditDialogTitle
  },

  watch: {
    page: async function () {
      this.books = (await BookService.index({ page: this.page })).data
    }
  },

  methods: {
    clickclick(param) {
      alert(param)
    },

    titleParser(title) {
      if (title.length < 25) {
        return `[${title}]`
      }
      return `[${title.substring(0, 25)}...]`
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
</style>