<template>
 <v-container>
    <v-layout class="white elevation-2" column ma-2>
      <v-toolbar class="book_list_toolbar black" flat dense dark>
        <v-toolbar-title>대여 현황</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <RentStatusTitle />
      <div
        v-for="(rent, i) in rentStatus"
        :key="i"
      >
        <RentStatusItem :rent="rent"/>
      </div>
      <div class="text-xs-center">
        <v-pagination
          v-model="page"
          :length="length"
        ></v-pagination>
      </div>
      <v-btn @click="getRentStatus">
        테스트용 버튼
      </v-btn>
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
    length: 1
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
        console.log(error)
      }
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