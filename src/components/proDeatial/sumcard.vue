<template>
  <dl class="m-sum-card">
    <dt>
      <div class="title">
        <h1>{{ dedailData.title }}</h1>
        <span> <i class="el-icon-success"></i> 食品安全档案</span>
      </div>
      <p class="score">
        <el-rate
          v-model="dedailData.score"
          disabled
          show-score
          text-color="#ff9900"
        >
        </el-rate
        >分

        <span
          >人均¥<span>{{ dedailData.avgPrice }}</span></span
        >
      </p>
      <ul>
        <li>
          地址：{{ dedailData.address
          }}<i class="el-icon-location-information"></i>
        </li>
        <li>电话：{{ dedailData.phone }}</li>
        <li>营业时间：{{ dedailData.businessTime }}</li>
      </ul>
      <ul>
        <li v-for="item in dedailData.service">
          <i ></i>
          {{ item }}
        </li>
      </ul>
    </dt>
    <dd>
      <div>
        <img
          :src="dedailData.imgUrl"
          alt=""
        />
      </div>
      <ul>
        <li>
          <img
            src="https://p1.meituan.net/mogu/66552d0ab844ec7f891493f731ba1a1438165.jpg@92w_50h_1e_1c"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://p0.meituan.net/poiugc/b892830b50900703f799804296b52e9d64702.jpg@92w_50h_1e_1c"
            alt=""
          />
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
export default {
  data () {
    return {
      // ...this.dedailData,
    }
  },
  props: ['dedail-data']
}
</script>

<style></style>
