<template>
  <v-layout row pa-1>
    <v-flex xs4>
      <v-layout column fill-height justify-center>
        <div class="selected-book-info-title">{{title}}</div>
      </v-layout>
    </v-flex>
    <v-flex xs8>
      <v-layout column fill-height justify-center>
        <div class="selected-book-info-content">{{content}}</div>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selected-book-info-title {
  font-size: 20px;
}

.selected-book-info-content {
  font-size: 20px;
}
</style>