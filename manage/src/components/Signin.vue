<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class="black" dark>
            <v-toolbar-title>접근을 위해서 로그인이 필요합니다.</v-toolbar-title>
          </v-toolbar>
          <v-layout pa-5 justify-center align-center>
            <LoginButton />
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LoginButton from '@/components/LoginButton'

export default {
  data: () => ({
    uid: '',
    password: '',
    error: null
  }),

  components: {
    LoginButton
  },
}
</script>

<style lang="css">
.error {
  color: red;
}