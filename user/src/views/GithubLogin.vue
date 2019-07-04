<template>
  <v-app>
    <v-layout fill-height justify-center align-center>
      <v-progress-circular
        indeterminate
        color="black"
      ></v-progress-circular>
    </v-layout>
  </v-app>
</template>

<script>
/* eslint-disable no-console */
import axios from 'axios'

export default {
  methods: {
    redirect: function(url) {
      window.location.href = url
    }
  },
  created() {
    const redirect = this.redirect;
    axios.get('http://localhost:8081/user?token=' + this.$route.query.token)
    .then(function(resp) {
      alert(resp.data + '! login success!');
      redirect('/')
    })
    .catch(function(err) {
      console.log(err)
      redirect('/')
    })
  },
  beforeRouteEnter(to, from, next) {
    if(to.query) {
      next()
    } else {
      alert('there\'s no query data.')
      next('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>