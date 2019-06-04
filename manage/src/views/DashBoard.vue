<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs6>
        <v-layout class="white elevation-2" column ma-2>
          <v-toolbar flat dense class="black" dark>
            <v-toolbar-title>현재 대출 내역</v-toolbar-title>
          </v-toolbar>
          <v-layout column pa-2>
            <div>현재 대출 내역은</div>
            <div>ㅇㅇㅇ : 1권 / 5권</div>
            <div>ㅌㅌㅌ : 2권 / 4권</div>
          </v-layout>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <v-layout class="white elevation-2" column ma-2 xs6>
          <v-toolbar flat dense class="black" dark>
            <v-toolbar-title>책 관리</v-toolbar-title>
          </v-toolbar>
          <v-btn
            dark
            class="primary"
            to='bookadd'>
            새로운 도서 추가
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>