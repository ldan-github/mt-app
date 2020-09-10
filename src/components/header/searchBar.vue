<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <router-link to="/"
          ><img
            src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
            alt="美团"
        /></router-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="请输入内容"
            @blur="blur"
            @focus="facus"
            @input="input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="index">
              <router-link :to="{ name: 'goods', params: { name: item } }">
                {{ item }}</router-link
              >
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, index) in filterList" :key="index">
              <router-link :to="{ name: 'goods', params: { name: item } }">
                {{ item }}</router-link
              >
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#" v-for="(item, index) in suggestList" :key="index">
            {{ item }}
          </a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/api'

export default {
  data () {
    return {
      searchWord: '',
      isFacus: false,
      hotPlaceList: [],
      searchList: [],
      filterList: [],
      suggestList: []
    }
  },
  created () {
    api.searchHotWords().then((res) => {
      this.hotPlaceList = this.suggestList = res
    })
  },
  computed: {
    isHotPlace () {
      return this.isFacus && !this.searchWord
    },
    isSearchList () {
      return this.isFacus && this.searchWord
    }
  },
  methods: {
    blur () {
      setTimeout(() => {
        this.isFacus = false
      }, 300)
    },
    facus () {
      this.isFacus = true
    },
    input (val) {
      api.search().then((res) => {
        this.filterList = res.list.filter((item) => {
          return item.includes(val)
        })
      })
    }
  }
}
</script>
