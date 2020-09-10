<template>
  <div class="page-prodeatial">
    <el-row>
      <crumbs />
    </el-row>
    <el-row>
      <sumcard :dedail-data="dedailData" />
    </el-row>
    <el-row>
      <el-col :span="18">
        <detail-list :title="'商家团购及优惠'">
          <detail-item :deal="item" v-for="item in dealItems" />
        </detail-list>
        <detail-list :title="'推荐菜'">
          <detail-recommend :recommend-data="recommend" />
        </detail-list>
        <detail-list :title="'206条网友点评'">
          <detail-comment :comment-list="comment" />
        </detail-list>
      </el-col>
      <el-col :span="6">
        <map-fav :showmap="false" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MapFav from '@/components/product/mapFav.vue'
import Crumbs from '@/components/product/crumbs.vue'
import Sumcard from '@/components/proDeatial/sumcard.vue'
import DetailList from '@/components/proDeatial/detailList.vue'

import DetaNeedLogin from '@/components/proDeatial/detaNeedLogin'
import DetailItem from '@/components/proDeatial/detailItem'
import DetailRecommend from '@/components/proDeatial/detailRecommend'
import DetailComment from '@/components/proDeatial/detailComment'

import api from '@/api'
export default {
  data () {
    return {
      dedailData: null,
      itemHeader: ['一款堂食套餐', '一张优惠券']
    }
  },
  computed: {
    dealItems () {
      // let item = this.dedailData && this.dedailData.dealItems;
      // this.dealItems.forEach((ele, index) => {
      //   // ele.header = this.itemHeader[index];
      // });
      // return item;
      if (this.dedailData) {
        return this.dedailData.dealItems
      }
    },
    recommend () {
      if (this.dedailData) {
        return this.dedailData.recommend
      }
    },
    comment () {
      if (this.dedailData) {
        return this.dedailData.comment
      }
    }
  },
  components: {
    MapFav,
    Crumbs,
    Sumcard,
    DetailList,
    DetailItem,
    DetaNeedLogin,
    DetailRecommend,
    DetailComment
  },
  created () {
    api.getdetail().then((res) => {
      console.log(res)
      this.dedailData = res
    })
  }
}
</script>
<style lang="scss">
@import '@/assets/css/prodeatital/index.scss';
</style>
