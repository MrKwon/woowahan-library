<template>
  <v-toolbar flat class="transparent pt-3 pb-3"
    v-on:click="!$store.state.isUserLoggedIn ? $router.push('/login') : $router.push('/mypage')"
  >
    <v-list class="pa-0">
      <v-list-tile avatar>
          <v-list-tile-avatar
            v-if="!$store.state.isUserLoggedIn">
            <img
              src="../assets/unknown_user.png"/>
          </v-list-tile-avatar>

          <v-list-tile-avatar
            v-if="$store.state.isUserLoggedIn">
            <img
              :src="$store.state.user.avatar"/>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title
              v-if="!$store.state.isUserLoggedIn">
              <div>로그인이 필요합니다</div>
            </v-list-tile-title>
            <v-list-tile-title
              v-if="$store.state.isUserLoggedIn">
              <div>{{ $store.state.user.name }}</div>
            </v-list-tile-title>
          </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-toolbar>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>