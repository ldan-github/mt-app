<template>
  <div class="page-product">
    <el-row>
      <crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <categroy />
        </el-row>
        <el-row>
          <list ref="list" />
        </el-row>
        <el-row>
          <pagination :toatal="dataTotal" />
        </el-row>
      </el-col>
      <el-col :span="5">
        <map-fav :showmap='true'/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Crumbs from '@/components/product/crumbs.vue'
import Categroy from '@/components/product/categroy.vue'
import List from '@/components/product/list.vue'
import Pagination from '@/components/product/pagination.vue'
import MapFav from '@/components/product/mapFav.vue'
export default {
  components: {
    Crumbs,
    Categroy,
    List,
    Pagination,
    MapFav
  },
  data () {
    return {
      dataTotal: null
    }
  },
  mounted () {
    this.dataTotal = this.$refs.list.proList.length
    console.log(this.dataTotal)
  }
}
</script>

<style lang="scss">
@import '@/assets/css/products/index.scss';
</style>
