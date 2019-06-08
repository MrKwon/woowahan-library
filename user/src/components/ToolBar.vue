<template>
  <v-layout column>
    <v-toolbar class="toolbar elevation-2" app flat color="white">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-layout row>
          <v-flex xs12>
            <v-layout column align-center justify-center fill-height v-if="!searchBar">
              <v-layout row align-center>
                <img height="80" src="../assets/dark_logo.png"/>
              </v-layout>
            </v-layout>
            <v-layout column align-center justify-center fill-height v-if="searchBar">
              <v-layout row align-center>
                <v-text-field
                  flat
                  rows="1"
                  label="검색"
                  solo
                ></v-text-field>
              </v-layout>
            </v-layout>
          </v-flex>
        </v-layout>
      <v-spacer></v-spacer>
      <v-btn small flat icon color="black" v-on:click="searchBar = !searchBar" v-if="!searchBar">
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn small flat icon color="black" v-on:click="searchBar = !searchBar" v-if="searchBar">
        <v-icon>close</v-icon>
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
              <v-list-tile-title>서비스 준비중</v-list-tile-title>
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
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    searchBar: false,
    drawer: false,
    items: [
      { title: 'Home', icon: 'home', to: '/' },
    ],
  })
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
