<template>
  <v-layout row>
    <v-flex xs8>
      {{ title }}
    </v-flex>
    <v-flex xs2>
      {{ author }}
    </v-flex>
    <v-flex xs2>
      {{ publisher }}
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
    author: {
      type: String,
      required: true
    },
    publisher: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>