<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <Signin/>
    </v-layout>
  </v-container>
</template>

<script>
import GithubService from '@/services/GithubService'
import Signin from '@/views/Signin'

export default {
  data: () => ({

  }),

  components: {
    Signin,
  },

  async beforeMount() {
    this.login()
  },

  methods: {
    async login() {
      const params = new URLSearchParams(window.location.search)
      if (params.has('code')) {
        const code = params.get('code')
        try {
          const response = await GithubService.manager({ params: { code } })
          if (!response.data) {
            // eslint-disable-next-line no-console
            console.log('something went wrong. can\'t get access token.')
          } else {
            const user = response.data
            this.$store.dispatch('setUser', user)
            this.$router.push('dashboard')
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error)
          // eslint-disable-next-line no-console
          console.log('something went wrong. request failed.')
          this.$router.push('/')
        }
      }
    },


  }
}
</script>
