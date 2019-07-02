<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    clipped
    app
  >
    <v-toolbar flat class="transparent pt-3 pb-3">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="../assets/unknown_user.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>로그인이 필요합니다</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <!-- TODO: 로그인시에만 보이도록 수정 -->
    <v-list dense class="pt-2">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        v-bind:to="item.to"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean
    }
  },

  data: () => ({
    // drawer: false,
    items: [
      { title: '홈', icon: 'home', to: '/' },
      { title: '희망도서 신청', icon: 'book', to: '/' },
      { title: '대여현황', icon: 'import_contacts', to: '/' },
      { title: '예약현황', icon: 'assignment', to: '/' },
      { title: '즐겨찾기', icon: 'favorite', to: '/' },
      { title: '대여기록', icon: 'history', to: '/' },
    ],
  }),

  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>