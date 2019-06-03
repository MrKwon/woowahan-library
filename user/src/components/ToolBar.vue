<template>
  <v-toolbar class="toolbar" flat color="white">
    <v-toolbar-title>우아한 도서관</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">
        <v-icon>
          home
        </v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style>
.toolbar {
  border-bottom: 2px solid #E7ECF4;
}
</style>
