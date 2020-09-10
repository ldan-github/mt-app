<template>
  <div>
    <span>按省份选择: </span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="dityDisabled"
    />
    <span>直接搜索: </span>
    <el-select
      v-model="searchWord"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="item in searchList"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from './select'
import api from '@/api'
export default {
  data () {
    return {
      provinceList: [],
      province: '省份',
      cityList: [],
      city: '城市',
      provinceActive: false,
      cityActive: false,
      searchList: ['成都', '绵阳', '达州', '西安', '咸阳', '深圳'],
      searchWord: '',
      loading: false,
      dityDisabled: true
    }
  },
  mounted () {
    api.getprovince().then((res) => {
      this.provinceList = res.map((item) => {
        item.name = item.provinceName
        return item
      })
    })
  },
  methods: {
    changeProvinceActive (flag) {
      this.provinceActive = flag
      if (flag) {
        this.cityActive = false
      }
    },
    changeCityActive (flag) {
      this.cityActive = flag
      if (flag) {
        this.provinceActive = false
      }
    },
    changeProvince (item) {
      this.province = item.name
      this.dityDisabled = !(this.province && this.province != '省份')
      this.cityList = item.cityInfoList
    },
    changeCity (item) {
      this.city = item.name
      this.$store.dispatch('setPosition', item)
      this.$router.push({name: 'index'})
    },
    remoteMethod () {

    }
  },
  components: {
    MSelect
  }
}
</script>

<style lang="scss">
@import '@/assets/css/changecity/iselect.scss';
@import '@/assets/css/changecity/select.scss';
</style>
