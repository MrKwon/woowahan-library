<template>
  <v-layout column>
    <v-flex xs6 ma-2 pa-2>
      <h3>이미지</h3>
      <v-layout row align-center justify-center>
        <v-img
          v-bind:src="bookInfo.img_url"
          max-height="500px"
          max-width="200px"
          aspect-ratio="0.7"/>
      </v-layout>
      <v-text-field
        label="제목"
        v-model="bookInfo.title"
        v-bind:disabled="true"
      ></v-text-field>
      <v-text-field
        label="저자"
        v-model="bookInfo.author"
        v-bind:disabled="true"
      ></v-text-field>
      <v-text-field
        label="출판사"
        v-model="bookInfo.publisher"
        v-bind:disabled="true"
      ></v-text-field>
      <v-text-field
        label="ISBN"
        v-model="bookInfo.isbn"
        v-bind:disabled="true"
      ></v-text-field>
      <v-text-field
        label="수량"
        v-model="bookNumbers"
        type="number"
      ></v-text-field>
      <v-btn
        dark
        class="primary"
        v-on:click="bookRegister">
        등록하기
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import BookService from '@/services/BookService'

export default {
  props: {
    bookInfo: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    bookNumbers: 0,
  }),
  methods: {
    async bookRegister() {
      try {
        const response = await BookService.bookRegister({
          img_url: this.bookInfo.img_url,
          title: this.bookInfo.title,
          author: this.bookInfo.author,
          publisher: this.bookInfo.publisher,
          isbn: this.bookInfo.isbn,
          desc: this.bookInfo.desc
        })
        // alert(response.data.message)
        this.$router.push('/')
      } catch(error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>