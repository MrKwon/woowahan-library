<template>
  <v-container>
    <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense dark class="black">
          <v-toolbar-title>로그인이 필요합니다.</v-toolbar-title>
        </v-toolbar>
        <v-layout class="pa-5" align-center justify-center>
          <v-btn
            dark
            class="black"
            v-on:click="buttonClick">
            Github Login
          </v-btn>
        </v-layout>
      </div>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    buttonClick: () => {
      //TODO: async await 로 리팩토링
      axios.get('http://localhost:8081/manage/github')
      .then((res) => {
        window.location.href = res.data;
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err)
      })
    }
  }
}
</script>
