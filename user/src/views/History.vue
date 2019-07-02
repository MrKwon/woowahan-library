<template>
  <v-app>
    <MainToolBar />
    <v-content align-start>
      History Page
    </v-content>
  </v-app>
</template>

<script>
import MainToolBar from '@/components/MainToolBar'

export default {
  components: {
    MainToolBar,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>