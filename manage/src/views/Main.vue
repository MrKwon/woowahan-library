<template>
  <v-container fluid>
    <v-layout align-center justify-center v-if="!$store.state.isUserLoggedIn">
      <Signin/>
    </v-layout>
    <v-layout align-center justify-center v-if="$store.state.isUserLoggedIn">
      <DashBoard/>
    </v-layout>
  </v-container>
</template>

<script>
import Signin from '@/views/Signin'
import DashBoard from '@/views/DashBoard'

export default {
  data: () => ({

  }),
  components: {
    Signin,
    DashBoard
  }
}
</script>
