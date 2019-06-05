<template>
  <v-layout column>
    <v-layout v-if="grid">
      <v-flex xs12 sm6 offset-sm3>
        <v-container grid-list-lg fluid>
          <v-layout row wrap>
            <v-flex
              v-for="(book, i) in books"
              :key="i"
              xs6
            >
              <v-card class="image-container elevation-2" flat tile ma-2>
                <v-img
                  :src="book.img_url"
                  max-height="500px"
                  max-width="200px"
                  aspect-ratio="0.7"
                ></v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout v-if="!grid">
      <v-flex xs12>
        <div
          v-for="book in books"
          :key="book.title">
          <v-layout
            class="list-item" row ma-2>
            <v-flex xs2 pa-1>
              <v-img
                v-bind:src="book.img_url"
                aspect-ratio="0.7"/>
            </v-flex>
            <v-flex xs8>
              <v-layout column align-center justify-center fill-height pa-1>
                <v-flex xs6>
                  <div class="book-title">
                    {{ book.title }}
                  </div>
                </v-flex>
                <v-flex xs6 pt-2>
                  <div class="book-author">
                    {{ book.author }}
                  </div>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs2>
              <v-layout column align-center justify-center fill-height pa-1>
                <div class="book-publisher">
                  {{ book.publisher }}
                </div>
              </v-layout>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
    <v-btn fixed bottom right fab dark small color="black" v-on:click="grid = !grid">
      <v-icon dark v-if="grid">list</v-icon>
      <v-icon dark v-if="!grid">grid_on</v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  data: () =>({
    grid: true,
  })
}
</script>


<style>
.book-title {
  text-align: center;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 12px;
}
.book-author {
  text-align: center;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  font-size: 12px;
}
.book-publisher {
  text-align: center;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  font-size: 10px;
}
.image-container {
  border-radius: 10px;
}
.list-item {
  height: 80px;
  /* border-bottom: 1px solid gray; */
  box-shadow: 1px 1px 1px 1px #BDBDBD;
  border-radius: 10px
}
</style>
