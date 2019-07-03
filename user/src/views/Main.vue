<template>
  <v-app>
    <BookList v-bind:books="books"/>
    <v-layout row justify-center mb-2>
      <v-pagination
        dark
        color="#A4A4A4"
        v-model="page"
        :length="this.length"
        v-if="this.length !== 1"
        circle
      ></v-pagination>
    </v-layout>
    <v-btn fixed bottom right fab dark color="black" to="/rent">
      <v-img
        max-height="20"
        max-width="20"
        :src="require('@/assets/qr-code.png')"></v-img>
    </v-btn>
  </v-app>
</template>

<script>
import BookList from '@/components/BookList'
import BookService from '@/services/BookService'

export default {
  data: () => ({
    books: [],
    page: 1,
    length: 1,
  }),

  watch: {
    page: async function(nextPage) {
      this.books = (await BookService.books({ page: nextPage })).data
    }
  },

  components: {
    BookList,
  },

  async beforeMount() {
    this.books = (await BookService.books({ page: this.page })).data
    this.length = Math.floor(((await BookService.total()).data.lastId - 1) / 10) + 1
  },
}
</script>
