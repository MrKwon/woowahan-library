<template>
  <v-app>
    <ViewTitle title="마이페이지"/>
    <div>
      <v-layout class="profile-contianer"
        pa-4
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
      </v-layout>
    </div>
  </v-app>
</template>

<script>
import ViewTitle from '../components/ViewTitle'

export default {
  components: {
    ViewTitle
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-desc {
  font-size: 20px;
}
</style>