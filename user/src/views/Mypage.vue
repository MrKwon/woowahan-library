<template>
  <v-app>
    <ViewTitle title="마이페이지"/>
    <div>
      <v-layout class="profile-contianer"
        pa-4
        v-if="$store.state.user !== null"
        column justify-center align-center>
        <v-layout pa-4>
          <v-avatar
            size="150px"
            color="white"
          >
            <img :src="$store.state.user.avatar" alt="avatar">
          </v-avatar>
        </v-layout>
        <v-layout class="profile-desc"
          pa-2
        >
          <div>{{ $store.state.user.name }}</div>
        </v-layout>
        <v-layout class="profile-desc"
          pa-2
        >
          <div>{{ $store.state.user.email }}</div>
        </v-layout>
        <v-layout pa-2>
          <AuthStateChip :authorization="$store.state.user.authorization"/>
        </v-layout>
        <v-btn dark round color="black" @click="this.logout">로그아웃</v-btn>
      </v-layout>
    </div>
  </v-app>
</template>

<script>
import ViewTitle from '../components/ViewTitle'
import AuthStateChip from '../components/AuthStateChip'

export default {
  components: {
    ViewTitle,
    AuthStateChip,
  },

  methods: {
    logout: function() {
      this.$store.dispatch('removeUser')
      this.$router.push('/')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-desc {
  font-size: 20px;
}
</style>