<template>
  <div>
    <v-toolbar class="toolbar" app flat color="white">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-flex xs12>
        <v-layout column>
          <v-layout column align-center justify-center fill-height>
            <v-layout row align-center>
              <img height="30" src="../assets/dark_only_icon.png"/>
            </v-layout>
          </v-layout>
        </v-layout>
      </v-flex>
      <v-spacer></v-spacer>
      <v-btn small flat icon color="black" to="/search">
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
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
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: '홈', icon: 'home', to: '/' },
      { title: '희망도서 신청', icon: 'book', to: '/request_book' },
      { title: '대여현황', icon: 'import_contacts', to: '/current_rental' },
      { title: '예약현황', icon: 'assignment', to: '/reservation' },
      { title: '즐겨찾기', icon: 'favorite', to: '/favorite' },
      { title: '대여기록', icon: 'history', to: '/history' },
    ],
    
    error: null
  }),

  methods: {

  },

  components: {
  }
}
</script>


<style>
.toolbar-title {
  align-content: center;
  justify-content: center;
  font-size: 24px;
}
.v-input {
  height: 36px;
}
.v-text-field.v-text-field--solo .v-input__control {
  min-height: 36px;
}
.v-input__control {
  height: 36px;
}
.v-input__slot {
  height: 36px;
  margin: 0px;
}
.theme--light.v-text-field--solo > .v-input__control > .v-input__slot {
  border: 1px solid gray;
  border-radius: 10px;
}
</style>
