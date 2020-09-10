<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location-outline" />
      {{ $store.state.position.name }}
      <router-link class="changeCity" :to="{ name: 'changeCity' }">
        切换城市
      </router-link>
      [
      <a href="#" v-for="item in position.nearCity" :key="item.id"> {{ item.name }} </a>
      ]
    </div>
    <div class="m-user">
      <router-link class="login" :to="{ name: link }">
        {{ $store.state.userName }}
      </router-link>
      <router-link class="register" :to="{ name: 'register' }">
        注册
      </router-link>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // nearCity: this.$store.state.position.nearCity,
    }
  },
  computed: {
    link () {
      return this.$store.state.userName == '请登录' ? 'login' : 'user'
    },
    ...mapState(['position'])
  },
  created () {
    api.getPosition().then((res) => {
      this.$store.dispatch('setPosition', res)
    })
  }
}
</script>

<style></style>
