<template>
  <div class="m-detail-list">
    <h3>{{title}}</h3>
    <slot />
    <!-- <div class="content">
      <component :is="pageCmp" :deals='dedaildata'></component>
      <detail-item :deal='item' v-for="item in dealItems"/>

    </div> -->
    <!-- <deta-need-login /> -->
  </div>
</template>

<script>
import DetailItem from './detailItem'
import DetaNeedLogin from './detaNeedLogin'
export default {
  props: ['title'],
  computed: {
    pageCmp () {
      return this.$store.userName === '请登录'
        ? 'deta-need-login'
        : 'detail-item'
    }
    // dedaildata(){
    //     return this.dedailData
    // }
  },
  components: {
    DetaNeedLogin,
    DetailItem
  }
}
</script>

<style></style>
