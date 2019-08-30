<template>
 <v-container>
    <v-layout class="white elevation-2" column ma-2>
      <v-toolbar class="book_list_toolbar black" flat dense dark>
        <v-toolbar-title>대여 현황</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-on:click="_refresh()">
          새로고침
        </v-btn>
      </v-toolbar>
      <RentStatusTitle />
      <v-layout v-if="rentStatus.length === 0" justify-center align-center style="height: 300px; text-align: center;">
        <div>
          No Items
        </div>
      </v-layout>
      <div
        v-for="(rent, i) in rentStatus"
        :key="i"
      >
        <RentStatusItem :rent="rent"/>
      </div>
      <v-layout row justify-center align-center pa-2>
        <v-btn fab small flat dark class="black" @click="_pageDownBtnHandler">
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-btn fab small flat dark class="black" @click="_pageUpBtnHandler">
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
      </v-layout>
    </v-layout>
 </v-container>
</template>

<script>
import RentStatusTitle from '@/components/RentStatusTitle'
import RentStatusItem from '@/components/RentStatusItem'

import RentService from '@/services/RentService'

export default {
  data: () => ({
    rentStatus: [
      { id: 1, userName: 'test', rentDate: '2019-07-05', bookTitle: 'test', serial: '1' }
    ],
    page: 1,
    length: 1,
    error: ''
  }),

  components: {
    RentStatusTitle,
    RentStatusItem,
  },

  watch: {
    page: function () {
      this.getRentStatus()
    }
  },

  methods: {
    async getRentStatus() {
      const token = this.$store.state.user.token
      try {
        const response = await RentService.allUserRentStatus(token, { page: this.page })
        this.rentStatus = response.data
      } catch (error) {
        this.error = error
      }
    },

    _pageUpBtnHandler() {
      if (this.rentStatus.length === 10) {
        this.page += 1
      }
    },

    _pageDownBtnHandler() {
      if (this.page > 1) {
        this.page -= 1
      }
    },

    _refresh() {
      this.getRentStatus()
    }
  },

  beforeMount () {
    this.getRentStatus()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>