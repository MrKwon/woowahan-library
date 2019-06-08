<template>
  <v-content>
    <BookList v-bind:books="books"/>
    <v-layout row justify-center mb-2 mt-2>
      <v-pagination
        dark
        color="#A4A4A4"
        v-model="page"
        :length="this.length"
        v-if="this.length !== 1"
        circle
      ></v-pagination>
    </v-layout>
  </v-content>
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
    page: async function(newPage) {
      this.books = (await BookService.index({ page: this.page })).data
    }
  },

  components: {
    BookList,
  },

  methods: {
    
  },

  async beforeMount() {
    this.books = (await BookService.index({ page: this.page })).data
    this.length = Math.floor(((await BookService.total()).data.lastId - 1) / 10) + 1
  },
}
</script>
