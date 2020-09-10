<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :class="{ active: kind == item.tab }"
        :key="item.tab"
        :data-type="item.tab"
        :data-index="index"
      >
        {{ item.text }}
      </dd>
    </dl>
    <ul class="ibody">
      <li v-for="item in list" :key="item.image">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="img" />
          <div class="cbody">
            <div class="title">{{ item.title }}</div>
            <div class="sub-title">
              {{ item.subTitle }}
            </div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ item.price }}</span>
              </span>
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    nav: {
      type: Object,
      default () {
        return {
          title: '有格调',
          list: [
            {
              text: '全部',
              tab: 'all',
              all: [
                {
                  image:
                    'https://p1.meituan.net/wedding/8d26f93de654d433b17774e60a1fc5bd1028431.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
                  title: '木北造型',
                  address: '崇文门新世界店',
                  subTitle: '木北造型（崇文门新世界店）',
                  price: 398
                },
                {
                  image:
                    'http://p0.meituan.net/merchantpic/b5bc200ff96056aa58e2441c37b0097d58192.jpg@460w_260h_1e_1c',
                  title: 'COSTA COFFEE（东方新天地店）',
                  address: '东方新天地',
                  subTitle: '玫瑰黑巧茶拿铁1份',
                  price: 11
                },
                {
                  image:
                    'http://p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@460w_260h_1e_1c',
                  title: '祈年八号中餐厅',
                  address: '崇文门新世界',
                  subTitle: '单人点心自助午餐',
                  price: 98
                }
              ]
            },
            {
              text: '约会聚餐',
              tab: 'food'
            },
            {
              text: '丽人SPA',
              tab: 'spa'
            },
            {
              text: '电影演出',
              tab: 'movie'
            },
            {
              text: '品质出游',
              tab: 'travel'
            }
          ]
        }
      }
    }
  },
  computed: {
    list () {
      return this.nav.list[this.index][this.kind]
    }
  },
  data () {
    return {
      kind: 'all',
      index: 0
    }
  },
  methods: {
    over (e) {
      let dom = e.target
      if (dom.tagName !== 'DD') {
        return
      }
      this.kind = dom.dataset.type
      this.index = dom.dataset.index
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/index/artistic.scss';
</style>
