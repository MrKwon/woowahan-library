<template>
  <div id="app">
    <v-app>
      <ToolBar />
      <v-content>
        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar'

export default {
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