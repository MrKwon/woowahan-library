<template>
  <v-app>
    <ViewTitle title="로그인"/>
    <v-layout column justify-center align-center>
      <LoginButton />
    </v-layout>
  </v-app>
</template>

<script>
import LoginButton from '@/components/LoginButton.vue';
import ViewTitle from '@/components/ViewTitle'

export default {
  components: {
    ViewTitle,
    LoginButton,
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>