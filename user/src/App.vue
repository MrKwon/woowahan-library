<template>
  <div id="app">
    <v-app>
      <ToolBar/>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar'

export default {
  data: () => ({
    drawer: false
  }),

  components: {
    ToolBar
  }
}
</script>


<style>
#app {
  font-family: 'Do Hyeon', sans-serif;
}
.toolbar {
  border-bottom: 2px solid #E7ECF4;
}
</style>