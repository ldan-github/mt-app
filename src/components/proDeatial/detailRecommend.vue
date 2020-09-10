<template>
  <div class="m-recommend">
    <ul>
      <li class="pic" v-for="item in 6">
        <div class="imgbox">
          <img
            src="https://img.meituan.net/dpgroup/97eb380748aaea2840be1f80328cec91260771.jpg@130w_130h_1e_1c"
            alt=""
          />
        </div>
        <div class="desc">
          <span>霸王排骨</span>
          <span>￥24</span>
        </div>
      </li>
    </ul>
    <div class="list">
        <span v-for="item in recommendData" :key="item">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['recommend-data']
}
</script>

<style></style>
