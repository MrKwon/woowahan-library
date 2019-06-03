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
.toolbar {
  border-bottom: 2px solid #E7ECF4;
}
</style>