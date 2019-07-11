<template>
  <v-app>
    <TitleToolBar title="상세 정보"/>
    <div>
      <v-layout column>
        <v-layout column>
          <v-toolbar flat dense dark height="30px" class="black">
            <v-toolbar-title>책 정보</v-toolbar-title>
          </v-toolbar>
          <BookDescInfo v-bind:bookinfo="bookinfo"/>
        </v-layout>
        <v-layout column>
          <v-toolbar flat dense dark height="30px" class="black">
            <v-toolbar-title>대여 현황</v-toolbar-title>
          </v-toolbar>
          <v-flex xs12>
            <div class="message-ing">
              대여기능 공사중
            </div>
          </v-flex>
        </v-layout>
      </v-layout>
    </div>
  </v-app>
</template>

<script>
import BookService from '@/services/BookService'
import TitleToolBar from '@/components/TitleToolBar'
import BookDescInfo from '@/components/BookDescInfo'

export default {
  props: {
    id: {
      type: Number
    }
  },

  data: () => ({
    bookinfo: {
      title: '',
      author: '',
      publisher: '',
      isbn: ''
    },
  }),

  components: {
    TitleToolBar,
    BookDescInfo,
  },

  methods: {
    titleParser(title) {
      if (title.length >= 13) {
        return `${title.substring(0, 13)} ...`
      }
      return title
    }
  },

  async beforeMount() {
    this.bookinfo = (await BookService.book({ id: this.id })).data
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message-ing {
  padding: 10px;
  font-size: 20px;
  text-align: center;
  line-height: 100px;
}
</style>