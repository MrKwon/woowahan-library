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
      window.location.href = url;
    }
  },
  created() {
    const redirect = this.redirect;
    axios.get('http://localhost:8081/signin?code=' + this.$route.query.code)
    .then(function(res) {
      if(!res.data) {
        alert('something went wrong. can\'t get access token.');
        redirect('/')
      }
      redirect('/githublogin?token=' + res.data)
    })
    .catch(function(err) {
      alert('something went wrong. request failed.');
      console.log(err)
      redirect('/')
    })
  },
  
  beforeRouteEnter(to, from, next) {
    if(to.query) {
      if(to.query.code) {
        next()
      } else {
        alert('there\'s no query data.')
        next('/')
      }
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