<template>
  <v-layout column>
    <v-flex xs6 ma-2 pa-2>
      <div>이미지</div>
      <v-img
        v-bind:src="book.img_url"
        max-height="500px"
        max-width="200px"
        aspect-ratio="1"/>
      <v-text-field
        label="제목"
        v-model="book.title"
      ></v-text-field>
      <v-text-field
        label="저자"
        v-model="book.author"
      ></v-text-field>
      <v-text-field
        label="출판사"
        v-model="book.publisher"
      ></v-text-field>
      <v-text-field
        label="ISBN"
        v-model="book.isbn"
      ></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['book'],
  data: () => ({
    // book: {
    //   title: '',
    //   author: '',
    //   publisher: '',
    //   isbn: '',
    // }
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>