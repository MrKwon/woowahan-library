<template>
<v-app>
  <TitleToolBar title="대여하기"/>
  <v-content>
    <v-alert
      :value="true"
      type="error"
      v-if="error !== null"
    >
      {{ error }}
    </v-alert>
    <qrcode-stream @decode="onDecode" @init="onInit"/>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-text>
          서비스 준비 중 입니다.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="closeHandler()"
          >
            뒤로가기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-content>
</v-app>
</template>

<script>
import TitleToolBar from '@/components/TitleToolBar'

export default {
  data: () => ({
    dialog: true,
    error: null,
  }),

  components: {
    TitleToolBar
  },

  methods: {
    onDecode () {
      this.dialog = true
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "에러: 카메라 권한을 허가해주세요."
        } else if (error.name === 'NotFoundError') {
          this.error = "에러: 카메라가 없는 디바이스 입니다."
        } else if (error.name === 'NotSupportedError') {
          this.error = "에러: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "에러: 카메라가 이미 사용중인가요?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "에러: 설치된 카메라가 적절하지 않습니다."
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: 이 브라우저는 지원하지 않습니다."
        }
      }
    },

    closeHandler() {
      this.dialog = true
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>