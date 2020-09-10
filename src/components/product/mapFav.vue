<template>
  <div class="map-fav">
    <el-row class="map" v-if="showmap">
      <div>
        <img src="@/assets/img/map.png" alt="" />
      </div>
    </el-row>
    <el-row>
      <div class="fav">
        <h4 class="title">
          猜你喜欢
        </h4>
        <div class="like-list">
          <a v-for="item in favList" :key="item.itemId">
            <img :src="item.imgUrl" alt="" />
            <p class="title">{{ item.title }}</p>
            <p class="score-line">
              <el-rate
                v-model="+item.score"
                disabled
                text-color="#ff9900"
                style="display:inline-block"
              >
              </el-rate>
              <span class="des">{{ item.commentNum }}个评价</span>
            </p>
            <p class="address">{{ item.areaName }}</p>
            <p class="price">
              ¥
              <span>{{ item.lowPrice }}</span>
              起
            </p>
          </a>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
import api from '@/api'
export default {
  props: ['showmap'],
  data () {
    return {
      favList: []
    }
  },
  created () {
    api.getrecommend().then((res) => {
      this.favList = res
    })
  }
}
</script>

<style lang="scss" scoped>
.map-fav {
  width: 230px;
  margin-left: 10px;
  .map {
    position: sticky;
    top: 0px;
    margin-bottom: 10px;
    z-index: 10;
    img {
      width: 100%;
    }
  }
  .fav {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 16px 20px 0;
    .title {
      font-size: 16px;
      color: #333333;
      line-height: 22px;
      font-weight: 500;
    }
    .like-list {
      margin-top: 10px;
      a {
        color: #666;
        cursor: pointer;
        img {
          margin-bottom: 10px;
        }
        p {
          margin: 5px 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .title {
          font-size: 14px;
          color: #222222;
          line-height: 20px;
        }
        .score-line {
          i {
            font-size: 20px;
            margin-right: 0;
          }
          .des {
            font-size: 12px;
            color: #999;
            height: 24px;
            line-height: 24px;
            margin-left: 10px;
          }
        }
        .address {
          font-size: 12px;
          color: #999999;
          width: 100%;
          height: 18px;
          line-height: 18px;
        }
        .price {
          color: #ff6600;
          span {
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>
