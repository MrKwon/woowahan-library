<template>
  <v-app>
    <ViewTitle title="마이페이지"/>
    <v-layout column pa-5>
      <!-- <v-layout column> -->
      <v-avatar
        tile="false"
        size="150px"
        color="white"
      >
        <img :src="$store.state.user.avatar" alt="avatar">
      </v-avatar>
      <!-- </v-layout> -->
      <div>{{ $store.state.user.name }}</div>
      <br/>
      <div>{{ $store.state.user.email }}</div>
    </v-layout>
  </v-app>
</template>

<script>
import ViewTitle from '../components/ViewTitle'

export default {
  components: {
    ViewTitle
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>