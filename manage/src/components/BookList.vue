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
          v-on:click="clickclick(book.title)">
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
  </v-layout>
</template>

<script>
import BookService from '@/services/BookService'

export default {
  data: () => ({
    books: null,
    editMode: false,
    page: 1,
    length: 1,
  }),

  watch: {
    page: async function () {
      this.books = (await BookService.index({ page: this.page })).data
    }
  },

  methods: {
    clickclick(param) {
      alert(param)
    },
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