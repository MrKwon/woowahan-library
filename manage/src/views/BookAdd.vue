<template>
  <v-container>
    <v-layout class="elevation-2" column>
      <v-toolbar flat dense class="primary" dark>
        <v-toolbar-title>새 책 등록</v-toolbar-title>
      </v-toolbar>
      <v-layout row>
        <v-flex xs6 ma-2 pa-2>
          <v-layout row align-center justify-center>
            <v-flex xs8>
              <v-text-field
                label="검색할 도서명"
                v-model="toSearchTitle"
              ></v-text-field>
            </v-flex>
            <v-flex xs4>
              <v-btn
                dark
                class="primary"
                v-on:click="naverBookSearchResquest">
                검색하기
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <BookInfo v-bind:bookInfo="book"/>
      </v-layout>
    </v-layout>
    <v-dialog v-model="itemsDialog" max-width="750px">
      <v-card>
        <v-card-title justify-center>
          책 선택하기
        </v-card-title>
        <v-card-text>
          <v-progress-circular
            indeterminate
            color="primary"
            v-if="searchItems === null"
          ></v-progress-circular>
          <v-list>
            <SearchListHeader />
            <v-list-tile
              v-for="(item, i) in searchItems"
              :key="i"
              :item-value="item.title"
              @click="selectedItem(item)">
              <v-list-tile-title>
                <SearchListItem
                  v-bind:title="item.title"
                  v-bind:author="item.author"
                  v-bind:publisher="item.publisher"/>
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" flat @click="dialogCloseHandler()">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import BookService from '@/services/BookService'
import BookInfo from '@/components/BookInfo'
import SearchListHeader from '@/components/SearchListHeader'
import SearchListItem from '@/components/SearchListItem'

export default {
  data: () => ({
    book: {
      img_url: '',
      title: '',
      author: '',
      publisher: '',
      isbn: '',
      desc: ''
    },
    message: '',
    toSearchTitle: '',
    searchItems: null,
    isOnSearchingProcess: true,
    itemsDialog: false,
    select: null,
  }),
  components: {
    BookInfo,
    SearchListHeader,
    SearchListItem
  },
  methods: {
    async naverBookSearchResquest() {
      if (this.toSearchTitle === '') {
        alert('검색어를 입력해주세요')
        return
      }
      this.itemsDialog = true
      try {
        const response = await BookService.search({
          title: this.toSearchTitle
        })
        this.searchItems = response.data.items
        this.onSearchingProcessHandler()
      } catch (error) {
        this.message = error
      }
    },
    selectedItem(item) {
      this.book.img_url = item.image
      this.book.title = item.title
      this.book.author = item.author
      this.book.publisher = item.publisher
      this.book.isbn = item.isbn
      this.book.desc = item.description
      this.itemsDialog = false
      this.searchItems = null
      this.toSearchTitle = ''
    },
    dialogCloseHandler() {
      this.searchItems = null
      if (this.itemsDialog) {
        this.itemsDialog = false
      } else {
        this.itemsDialog = true
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>