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
          v-on:click="openBookButtonHandler(book)">
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
                      <BookEditDialogTitle title="ID" v-bind:content="selectedBook.id"/>
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
            <v-spacer>
            </v-spacer>
            <v-btn small flat @click="addButtonHandler">
              추가
            </v-btn>
          </v-toolbar>
          <v-layout row pa-2 style="border-bottom: 1px solid black;">
              <v-flex xs3>
                <div>일련번호</div>
              </v-flex>
              <v-flex xs7>
                <div>도서 상태</div>
              </v-flex>
              <v-flex xs2>
                <div>삭제</div>
              </v-flex>
            </v-layout>
          <div style="height: 200px; overflow: auto;">
            <v-layout v-if="selectedBookSerials.length === 0" pa-5 justify-center align-center>
              <div>
                No Data
              </div>
            </v-layout>
            <div v-for="(serial, i) in selectedBookSerials"
              :key="i">
              <v-layout row pa-2>
                <v-flex xs3>
                  <v-layout column fill-height justify-center align-center>
                    <div>{{ serial.id }}</div>
                  </v-layout>
                </v-flex>
                <v-flex xs7>
                  <v-layout column fill-height justify-center align-center>
                    <div>{{ _statusParser(serial.status) }}</div>
                  </v-layout>
                </v-flex>
                <v-flex xs2>
                  <v-btn flat small class="red" dark round @click="removeButtonHandler(serial.id)">
                    삭제
                  </v-btn>
                </v-flex>
              </v-layout>
            </div>
          </div>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" flat @click="bookEditDialog = false">취소</v-btn>
            <v-btn color="blue darken-1" flat @click="bookEditDialog = false">확인</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <v-snackbar
      v-model="snackbar"
      bottom
      :timeout="snackbarTimeout"
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
  </v-layout>
</template>

<script>
import BookService from '@/services/BookService'
import SerialService from '@/services/SerialService'

import BookEditDialogTitle from '@/components/BookEditDialogTitle'

export default {
  data: () => ({
    books: null,
    selectedBook: {
      id: '',
      img_url: '',
      title: '',
      author: '',
      publisher: '',
      desc: '',
      isbn: '',
    },
    selectedBookSerials: [
      { id: 1, status: false },
      { id: 2, status: false },
    ],
    editMode: false,
    page: 1,
    length: 1,
    bookEditDialog: false,
    snackbar: false,
    snackbarTimeout: 2000,
    snackbarMessage: 'temp message',
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
    titleParser(title) {
      if (title.length < 25) {
        return `[${title}]`
      }
      return `[${title.substring(0, 25)}...]`
    },

    async showBookSerials(bookId) {
      try {
        const response = await SerialService.showBookSerials({ bookId })
        if (response) {
          this.selectedBookSerials = response.data.bookSerials
        }
      } catch (error) {
        this.snackbarMessage = error.response.data.error
        this._pushSnackBar()
      }
    },

    async addSerial(bookId) {
      try {
        const response = await SerialService.addSerial({ bookId })
        if (response) {
          this.snackbarMessage = '등록성공'
          this._pushSnackBar()
          this.showBookSerials(bookId)
        }
      } catch (error) {
        this.snackbarMessage = error.response.data.error
        this._pushSnackBar()
      }
    },

    async removeSerial(id) {
      try {
        const response = await SerialService.removeSerial({ id })
        if (response) {
          console.log(response.data.message)
          this.snackbarMessage = response.data.message
          this._pushSnackBar()
          this.showBookSerials(this.selectedBook.id)
        }
      } catch (error) {
        this.snackbarMessage = error.response
        this._pushSnackBar()
      }
    },

    openBookButtonHandler(book) {
      this.selectedBook = book;
      this.showBookSerials(this.selectedBook.id)
      this.bookEditDialog = true;
    },

    addButtonHandler() {
      this.addSerial(this.selectedBook.id)
    },

    removeButtonHandler(id) {
      this.removeSerial(id)
    },

    _pushSnackBar() {
      this.snackbar = true;
    },

    _statusParser(status) {
      if (status) {
        return '대출중'
      } else {
        return '비치중'
      }
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