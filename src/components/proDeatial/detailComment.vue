<template>
  <div class="m-comment">
    <ul>
      <li v-for="item in 10" @click="click">
        味道赞 (49)
      </li>
    </ul>
    <dl>
      <dt>
        <el-checkbox v-model="checked">只看有图片的评论</el-checkbox>
      </dt>
      <dd v-for="item in commentList" :key="item.evalaute">
        <div class="header">
          <img :src="item.image" alt="" />
        </div>
        <div class="info">
          <div class="name">{{ item.username }}</div>
          <div class="score-date">
            <el-rate
              v-model="item.rate"
              disabled
              show-score
              text-color="#ff9900"
            >
            </el-rate>
            <div class="date">
              2020年7月25日
            </div>
          </div>
          <p class="desc">
            {{ item.evalaute }}
          </p>
          <p class="reply">
            商家回复：非常感谢您对本店的评价，您的满意就是我们的奋斗目标，热烈期待您的下次光临！
          </p>
          <div class="show-img">
            <div class="imgbox">
              <img v-for="img in item.pics" :key="img" :src="img" alt="" @click="chooseImg(img)" />
            </div>
            <div class="show-bgimg" v-if="showBigImg">
              <div>
                <i class="el-icon-arrow-left icon"></i>
                <i class="el-icon-arrow-right icon"></i>
              </div>
              <img
                :src="showBigImg"
                alt=""
              />
            </div>
          </div>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ['commentList'],
  data () {
    return {
      checked: false,
      showBigImg: ''
    }
  },
  methods: {
    click (e) {
      let dom = e.target
      dom.className = dom.className ? '' : 'active'
    },
    chooseImg (img) {
      this.showBigImg = img
    }
  }
}
</script>

<style></style>
