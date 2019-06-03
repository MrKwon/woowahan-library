<template>
  <v-container fluid>
    <h1>Manage Main Page</h1>
    <div>
      {{ this.userInfo }}
      <!-- {{ this.user ?
        this.userInfo :
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      }} -->
    </div>
  </v-container>
</template>

<script>
/* eslint-disable no-console */
import axios from 'axios'

export default {
  data: () => ({
    user: false,
    userInfo: ''
  }),
  methods: {
    redirect: function(url) {
      window.location.href = url
    }
  },
  created() {
    const redirect = this.redirect
    if(this.$route.query.service === 'github') {
      axios.get('http://localhost:8081/user/user?token=' + this.$route.query.token)
      .then((resp) => {
        this.user = true
        this.userInfo = resp
      })
      .catch((err) => {
        console.log(err)
        redirect('/')
      })
    }
  },
  beforeRouteEnter: (to, from, next) => {
    if(to.query) {
      if(to.query.service) {
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