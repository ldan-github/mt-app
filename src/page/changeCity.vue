<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot-city title="热门城市" :list="hotCityList" />
    </el-row>
    <el-row>
      <hot-city title="最近访问" :list="rencentList" />
    </el-row>
    <el-row>
      <category />
    </el-row>
  </div>
</template>

<script>
import Province from '@/components/changeCity/province.vue'
import HotCity from '@/components/changeCity/hotCity.vue'
import Category from '@/components/changeCity/category.vue'

import api from '@/api'
export default {
  data () {
    return {
      hotCityList: ['成都', '绵阳', '达州', '西安', '咸阳', '深圳'],
      rencentList: ['北京', '上海', '广州']
    }
  },
  created () {
    api.hot().then((res) => {
      this.hotCityList = res
    })
    api.recents().then((res) => {
      this.rencentList = res
    })
  },
  components: {
    Province,
    HotCity,
    Category
  }
}
</script>
