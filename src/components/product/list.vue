<template>
  <div class="m-products-list">
    <ul>
      <li
        :class="{
          's-nav-active': active === item.key,
          's-price': item.key === 's-price',
        }"
        v-for="item in nav"
        :key="item.key"
        @click="active = item.key"
      >
        {{ item.name }}
      </li>
    </ul>
    <el-row>
      <item v-for="item in proList" :key="item.itemId" :proList="item" />
    </el-row>
  </div>
</template>

<script>
import Item from './item.vue'
import api from '@/api'
export default {
  components: {
    Item
  },
  data () {
    return {
      active: 's-dedault',
      nav: [
        {
          key: 's-dedault',
          name: '智能排序'
        },
        {
          key: 's-price',
          name: '价格排序'
        },
        {
          key: 's-score',
          name: '人气最高'
        },
        {
          key: 's-comment',
          name: '评价最高'
        }
      ],
      proList: [
        {
          image:
            'http://p0.meituan.net/msmerchant/9db44d030f8addef00d92ca6f0d06990833361.jpg@220w_125h_1e_1c',
          title: '火鸡老店',
          type: 'food',
          score: 4.1,
          commentNum: 0,
          comment: [
            {
              username: 'xxxx',
              evalaute: '好吃'
            }
          ],
          tab: ['火锅', '沙河'],
          address: '昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里',
          avgPrice: 64,
          dealItems: [
            {
              title: '火鸡宴，建议10-14人使用',
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: '元'
            }
          ]
        },
        {
          image:
            'http://p0.meituan.net/msmerchant/9db44d030f8addef00d92ca6f0d06990833361.jpg@220w_125h_1e_1c',
          title: '火鸡老店',
          type: 'food',
          score: 4.1,
          commentNum: 0,
          comment: [
            {
              username: 'xxxx',
              evalaute: '好吃'
            }
          ],
          tab: ['火锅', '沙河'],
          address: '昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里',
          avgPrice: 64,
          dealItems: [
            {
              title: '火鸡宴，建议10-14人使用',
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: '元'
            }
          ]
        }
      ]
    }
  },
  created () {
    api.getgoodsList().then((res) => {
      this.proList = res
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/css/products/list.scss';
</style>
