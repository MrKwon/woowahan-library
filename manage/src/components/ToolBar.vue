<template>
  <div>
    <v-navigation-drawer
      v-if="$store.state.user !== null"
      v-model="drawer"
      fixed
      clipped
      app
    >
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text" :to="item.to">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon
        @click.stop="drawer = !drawer"
        v-if="$store.state.user !== null"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="toolbar-title">우아한 테크도서관 [관리자]</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat icon color="black" to="/book/add"
        v-if="$store.state.isUserLoggedIn">
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn flat icon color="black" 
        v-if="$store.state.isUserLoggedIn"
        v-on:click="logout">
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
    
  </div>
</template>

<script>
export default {
  data:() => ({
    drawer: true,
    items: [
      { title: '대시보드', icon: 'home', to: '/dashboard' },
      { title: '보유장서', icon: 'book', to: '/books' },
      { title: '신청도서 확인', icon: 'assignment', to: '/requested' },
      { title: '유저관리', icon: 'assignment_ind', to: '/users' },
      { title: '대여현황', icon: 'list_alt', to: '/rentstatus'}
    ]
  }),

  methods: {
    logout() {
      this.$store.dispatch('setUser', null)
      this.$router.push('/')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>