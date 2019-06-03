<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-progress-circular
        indeterminate
        color="primary"
        :size=50
      ></v-progress-circular>
    </v-layout>
  </v-container>
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
    const redirect = this.redirect
    axios.get('http://localhost:8081/manage/login?code=' + this.$route.query.code + '&state=' + this.$route.query.state)
    .then(function(res) {
      if(!res.data) {
        alert('뭔가 잘못됨');
        redirect('/')
      }
      redirect('/main?token=' + res.data + '&service=github')
    })
    .catch(function(err) {
      alert('something went wrong. request failed.');
      console.log(err)
      redirect('/')
    })
  },
  beforeRouteEnter(to, from, next) {
    if(to.query) {
      if(to.query.code && to.query.state) {
        next()
      } else {
        alert('Forbidden')
        next('/')
      }
    } else {
      alert('Forbidden')
      next('/')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>