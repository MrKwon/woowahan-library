<template>
  <v-layout ma-1 pa-2>
    <v-flex xs1>
      {{ rent.id }}
    </v-flex>
    <v-flex xs2>
      {{ rent.userName }}
    </v-flex>
    <v-flex xs2>
      {{ dateParser(rent.rentDate) }}
    </v-flex>
    <v-flex xs2>
      대출중
    </v-flex>
    <v-flex xs1>
      {{ calculatePeriod(rent.rentDate) }} 일
    </v-flex>
    <v-flex xs3>
      {{ rent.bookTitle }}
    </v-flex>
    <v-flex xs1>
      {{ rent.serial }}
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    rent: {
      type: Object,
      required: true
    }
  },

  methods: {
    calculatePeriod(startDate) {
      const rentDate = new Date(startDate)
      const today = Date.now()
      return Math.round((today - rentDate) / (24 * 60 * 60 * 1000))
    },

    dateParser(date) {
      return date.substring(0, 10)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>