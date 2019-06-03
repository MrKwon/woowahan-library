<template>
  <v-container>
    <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense dark class="black">
          <v-toolbar-title>로그인</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            v-model="password"
          ></v-text-field>
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-layout>
            <v-btn
              dark
              class="black"
              @click="login">
              Login
            </v-btn>
          </v-layout>
        </div>
      </div>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'home',
  data: () => ({
    email: '',
    password: '',
    error: null
  })
}
</script>
