<template>
  <v-layout column>
    <v-toolbar class="toolbar elevation-2" app flat color="white">
      <v-layout row v-if="!searchBar">
        <v-flex xs2>
          <v-layout row align-center justify-start fill-height>
            <v-btn small flat icon color="black">
              <v-icon>account_circle</v-icon>
            </v-btn>
          </v-layout>
        </v-flex>
        <v-flex xs8>
          <v-layout column align-center justify-center fill-height >
            <div class="toolbar-title">
              우아한 테크 도서관
            </div>
          </v-layout>
        </v-flex>
        <v-flex xs2>
          <v-layout row align-center justify-end fill-height>
            <v-btn small flat icon color="black" v-on:click="searchBar = !searchBar">
              <v-icon>search</v-icon>
            </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout row v-if="searchBar" white>
        <v-flex xs10>
          <v-layout class="text-field" row align-center justify-end fill-height>
            <v-text-field
              flat
              rows="1"
              label="검색"
              solo
            ></v-text-field>
          </v-layout>
        </v-flex>
        <v-flex xs2>
          <v-layout row align-center justify-end fill-height>
            <v-btn small flat icon color="black" v-on:click="searchBar = !searchBar">
              <v-icon>close</v-icon>
            </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-toolbar>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    searchBar: false,
  })
}
</script>


<style>
.toolbar-title {
  text-align: center;
  font-size: 24px;
}
.v-input {
  height: 36px;
}
.v-text-field.v-text-field--solo .v-input__control {
  min-height: 36px;
}
.v-input__control {
  height: 36px;
}
.v-input__slot {
  height: 36px;
  margin: 0px;
}
.theme--light.v-text-field--solo > .v-input__control > .v-input__slot {
  border: 1px solid gray;
  border-radius: 10px;
}
</style>
