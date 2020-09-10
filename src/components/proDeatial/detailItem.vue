<template>
  <dl class="m-detail-item">
    <dt>一款堂食套餐</dt>
    <dd class="section">
      <div class="left">
        <div class="img">
          <img
            src="https://p0.meituan.net/208.126/deal/02446359990b1f6f8b59964adbdd57f8650132.jpg@100w_100h_1e_1c"
            alt=""
          />
        </div>
        <div class="info">
          <h4 class="title">{{deal.title}} <i></i></h4>
          <p>已售{{deal.saleNum}}</p>
          <p><span class="price">{{deal.price}}</span> <span>¥门店价{{deal.counterPrice}}</span></p>
        </div>
      </div>
      <div class="right">
        <el-button type="warning" round>立即抢购</el-button>
      </div>
    </dd>

  </dl>
</template>

<script>
export default {
  props: ['deal']
}
</script>

<style></style>
