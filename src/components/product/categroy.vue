<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in classicList" :key="item.type">
        <m-select :name="item.title" :list="item.subList" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="item in areaList" :key="item.type">
        <m-select :name="item.title" :list="item.subList" />
      </dd>
    </dl>
  </div>
</template>

<script>
import MSelect from './select.vue'
import api from '@/api'

import axios from 'axios'
export default {
  components: {
    MSelect
  },
  data () {
    return {
      classicList: [
        {
          title: '美食',
          type: 'food',
          subList: [
            {
              name: '日本菜',
              id: 'Japan'
            },
            {
              name: '韩国菜',
              id: 'simida'
            }
          ]
        },
        {
          title: '酒店住宿',
          type: 'hotal',
          subList: [
            {
              name: '温泉酒店',
              id: 'hot_spring'
            }
          ]
        }
      ],
      areaList: [
        {
          title: '推荐商圈',
          subList: [
            {
              name: '望京',
              id: 120000
            },
            {
              name: '昌平',
              id: 12222
            }
          ]
        }
      ]
    }
  },
  created () {
    api.getclassify().then((res) => {
      this.classicList = res
    })

    const instance = axios.create()
    instance.defaults.baseURL = 'http://open.duyiedu.com'
    instance.interceptors.request.use(function (config) {
      config = {
        ...config,
        params: {
          appkey: 'duyi18381972340_1590676621257'
        }
      }
      return config
    })
    instance('/api/meituan/list/areaList.json').then((res) => {
      this.areaList = JSON.parse(res.data + ']}').data
    })
  }
}
</script>

<style></style>
