<template>
  <v-app>
      <ViewTitle title="로그인"/>
      <v-layout column justify-center align-center>
          검은 고양이 네로 ~
      </v-layout>
  </v-app>
</template>

<script>
import GithubOAuthService from "../services/spring/GithubOAuthService";

import ViewTitle from '../components/ViewTitle'

export default {
  components: {
    ViewTitle,
  },

  async beforeCreate() {
    try {
      const response = await GithubOAuthService.login(this.$route.query.code)
      if (response.data) {
        const { user, token } = response.data
        await this.$store.dispatch('setUser', user)
        await this.$store.dispatch('setToken', token)
        this.$router.push({
          name: 'main',
          params: { message: `${this.$store.state.user.name} 님 환영합니다.` }
        })
      } else {
        this.$router.push({
          name: 'main',
          params: { error: '응답 없음' }
        })
      }
    } catch (error) {
      this.$router.push({
        name: 'main',
        params: { error: `${error.code} 로 인한 로그인 실패` }
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>