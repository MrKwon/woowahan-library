<template>
  <v-layout column>
    <v-layout row>
      <v-flex xs6 ma-2 pa-2>
        <h3>이미지</h3>
        <v-layout row align-center justify-center>
          <v-img
            v-bind:src="bookInfo.image"
            max-height="500px"
            max-width="200px"
            aspect-ratio="0.7"/>
        </v-layout>
      </v-flex>
      <v-flex xs6 ma-2 pa-2>
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
          v-model="eachBookCount"
          type="number"
        ></v-text-field>
        <div class="error-box">
          {{message}}
        </div>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs6>
        <v-layout column>
          <v-btn
            dark
            class="primary">
            추가하기
          </v-btn>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <v-layout column>
          <v-btn
            dark
            class="primary"
            v-on:click="bookRegister">
            등록하기
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
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
    eachBookCount: 0,
    message: '',
    bookNumbers: 1,
  }),

  components: {
  },

  methods: {
    async bookRegister() {
      try {
        // TODO: 성공 여부 Dialog 띄워줘야 함 
        // eslint-disable-next-line
        const response = await BookService.bookRegister({
          image: this.bookInfo.image,
          title: this.bookInfo.title,
          author: this.bookInfo.author,
          publisher: this.bookInfo.publisher,
          isbn: this.bookInfo.isbn,
          desc: this.bookInfo.desc
        })
        this.message = response.data.message
        this.clearBookInfo()
      } catch(error) {
        this.message = error.response.data.error
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error-box {
  margin: 16px;
  color: red;
}
</style>