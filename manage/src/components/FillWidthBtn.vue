<template>
  <v-layout column>
    <v-btn
      v-bind:dark="this.dark"
      v-bind:class="this.class"
      v-on:click="this.click">
      {{this.title}}
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  props: ['click', 'title', 'class', 'dark']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>