<template>
  <div id="app">
    <Toolbar/>
    <v-content>
      <router-view/>
    </v-content>
  </div>
</template>

<script>
import Toolbar from './components/ToolBar'

export default {
  name: 'App',
  components: {
    Toolbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.toolbar-title {
  font-family: 'Do Hyeon', sans-serif;
}
</style>
