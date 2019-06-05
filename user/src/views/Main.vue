<template>
  <v-content>
    <BookList v-bind:books="books"/>
    <v-layout row justify-center mb-2 mt-2>
      <div class="text-xs-center">
        <v-pagination
          dark
          color="#A4A4A4"
          v-model="page"
          :length="3"
          circle
        ></v-pagination>
      </div>
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
  }),
  components: {
    BookList,
  },
  async beforeMount() {
    this.books = (await BookService.index()).data
  }
}
</script>
