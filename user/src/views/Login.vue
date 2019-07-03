<template>
  <v-app>
    <ViewTitle title="로그인"/>
    <v-layout column justify-center align-center>
      <v-btn color="black" dark round large>
        Github 로그인
      </v-btn>
    </v-layout>
  </v-app>
</template>

<script>
import ViewTitle from '@/components/ViewTitle'

export default {
  components: {
    ViewTitle
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>