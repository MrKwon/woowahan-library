<template>
  <v-toolbar class="toolbar elevation-2" flat color="white" fixed>
    <v-layout row>
      <v-flex xs2>
        <v-layout row align-center justify-start fill-height>
          <v-btn small flat icon color="black">
            <v-icon>account_circle</v-icon>
          </v-btn>
        </v-layout>
      </v-flex>
      <v-flex xs8>
        <v-layout column align-center justify-center fill-height>
          <div class="toolbar-title">
            우아한 테크 도서관
          </div>
        </v-layout>
      </v-flex>
      <v-flex xs2>
        <v-layout row align-center justify-end fill-height>
          <v-btn small flat icon color="black">
            <v-icon>search</v-icon>
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-toolbar>
</template>

<style>
.toolbar-title {
  text-align: center;
  font-size: 24px;
}
</style>
