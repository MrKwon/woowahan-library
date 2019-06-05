<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container grid-list-lg fluid>
          <v-layout row wrap>
            <v-flex
              v-for="n in 10"
              :key="n"
              xs6
            >
              <v-card class="image-container elevation-2" flat tile>
                <v-img
                  src="https://search.pstatic.net/common/?src=https%3A%2F%2Fbookthumb-phinf.pstatic.net%2Fcover%2F091%2F459%2F09145968.jpg%3Ftype%3Dm1%26udate%3D20171011&amp;type=o75_108_re24"
                  max-height="500px"
                  max-width="200px"
                  aspect-ratio="0.7"
                ></v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style>
.image-container {
  border-radius: 10px;
}
</style>
