<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class="black" dark>
            <v-toolbar-title>접근을 위해서 로그인이 필요합니다.</v-toolbar-title>
          </v-toolbar>

          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              label="ID"
              v-model="uid"
            ></v-text-field>
            <br>
            <v-text-field
              label="PASSWORD"
              v-model="password"
              type="password"
              hint="At least 8 characters"
            ></v-text-field>
            <br>
            <div class="error" v-html="error" />
            <br>
            <v-btn
              dark
              class="black"
              v-on:click="login">
              Login
            </v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
  data: () => ({
    uid: '',
    password: '',
    error: null
  }),
  methods: {
    async login() {
      try {
        const response = await AuthService.login({
          uid: this.uid,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push('/')
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style lang="css">
.error {
  color: red;
}