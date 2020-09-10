<template>
  <div class="m-menu" @mouseleave="menuleave">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in menuList"
        :key="index"
        @mouseenter="menuenter(item)"
      >
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="curDetail" @mouseleave="menuleave">
      <template v-for="(item, index) in curDetail.items">
        <h4 :key="index">{{ item.title }}</h4>
        <span v-for="(v, i) in item.items" :key="v + '_' + i">{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      curDetail: null,
      menuList: [
        {
          title: '美食',
          icon: 'food',
          children: [
            {
              title: '美食',
              children: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '日韩料理',
                '西餐'
              ]
            }
          ]
        },
        {
          title: '外卖',
          icon: 'takeout',
          children: [
            {
              title: '外卖',
              children: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '日韩料理',
                '西餐'
              ]
            }
          ]
        },
        {
          title: '酒店',
          icon: 'hotel',
          children: [
            {
              title: '酒店星际',
              children: [
                '经典型',
                '舒适型',
                '高档次型',
                '豪华',
                '五星',
                '西餐'
              ]
            }
          ]
        }
      ]
    }
  },
  created () {
    api.nav().then((res) => {
      this.menuList = res
    })
  },
  methods: {
    menuenter (item) {
      this.curDetail = item
    },
    menuleave () {
      this.curDetail = null
    }
  }
}
</script>

<style></style>
