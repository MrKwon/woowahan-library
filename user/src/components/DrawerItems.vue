<template>
  <div>
    <v-list dense class="pt-2"
      v-if="$store.state.isUserLoggedIn && $store.state.user.authorization !== 'none'">
      <v-list-tile
        v-for="(item, index) in items"
        :key="index"
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
    <v-list dense class="pt-2"
      v-if="$store.state.isUserLoggedIn && $store.state.user.authorization === 'none'">
      <v-list-tile
        v-for="(item, index) in unauthItems"
        :key="index"
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
    <v-list dense class="pa-3"
      v-if="$store.state.isUserLoggedIn && $store.state.user.authorization === 'none'"
    >
      <div>이용 권한이 없습니다.</div>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: '홈', icon: 'home', to: '/' },
      { title: '희망도서 신청', icon: 'book', to: '/request_book' },
      { title: '대여현황', icon: 'import_contacts', to: '/current_rental' },
      { title: '예약현황', icon: 'assignment', to: '/reservation' },
      { title: '즐겨찾기', icon: 'favorite', to: '/favorite' },
      { title: '대여기록', icon: 'history', to: '/history' },
    ],
    unauthItems: [
      { title: '홈', icon: 'home', to: '/' },
    ]
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>