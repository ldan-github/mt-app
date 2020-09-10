<template>
  <div class="s-item">
    <dt>
      <img :src="proList.image" />
    </dt>
    <dd>
      <h3>
        <router-link :to="{ name: 'proDeatial' }">
          {{ proList.title }}
        </router-link>
      </h3>
      <p>
        <el-rate
          :value="proList.score"
          disabled
          show-text
          text-color="#333"
          :texts="showTexts"
          class="el-rate"
        >
        </el-rate>
        <span>{{ proList.score }}分</span>
        <span class="s-item-comment-total">{{ proList.commentNum }}评论</span>
      </p>
      <p>
        <span class="s-item-tab">
          <span v-for="(v, i) in proList.tab" :key="v">{{
            v + (i !== proList.tab.length - 1 ? '|' : '')
          }}</span>
        </span>
        <span class="s-item-addr">{{ proList.address }}</span>
        <span>
          <a href="#">
            <i class="el-icon-location-information"></i>
            查看地图
          </a>
        </span>
      </p>
      <p>
        <span class="s-item-price"> 人均¥{{ proList.avgPrice }} </span>
      </p>
      <ul class="deal-items">
        <li
          class="items"
          v-for="item in proList.dealItems.slice(0, 2)"
          :key="item.title"
        >
          <p class="deal-title">
            {{ item.title }}
          </p>
          <p>
            <span class="deal-price"> ¥{{ item.price }} </span>
            <span class="deal-old-price"> 门市价¥{{ item.counterPrice }} </span>
            <span class="deal-sales"> 已售{{ item.saleNum }} </span>
          </p>
        </li>
      </ul>
    </dd>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showTexts: ['极差', '差', '一般', '还行', '好', '很好']
    }
  },
  props: {
    proList: {
      type: Object
    }
  }
}
</script>

<style></style>
