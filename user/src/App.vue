<template>
  <div id="app">
    <ToolBar />
    <router-view/>
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