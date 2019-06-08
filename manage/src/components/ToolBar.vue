<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <span class="toolbar-title">우아한 테크도서관 [관리자]</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat icon color="black" to="/">
      <v-icon>home</v-icon>
    </v-btn>
    <v-btn flat icon color="black" to="book/add"
      v-if="$store.state.isUserLoggedIn">
      <v-icon>add</v-icon>
    </v-btn>
    <v-btn flat icon color="black" 
      v-if="$store.state.isUserLoggedIn"
      v-on:click="logout">
      <v-icon>account_circle</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push('/')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>