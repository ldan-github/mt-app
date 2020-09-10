<template>
  <div class="categroy">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in dataList" :key="item">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      class="m-categroy-section"
      v-for="(item, index) in cityGroup"
      :key="index"
      :id="'city-' + index"
    >
      <dt>{{ index }}</dt>
      <dd>
        <span v-for="city in item" :key="city.id"
        @click="changeCity(city)">
          {{ city.name }}
        </span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      dataList: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      cityGroup: {}
    }
  },
  methods: {
    changeCity (city) {
      this.$store.dispatch('setPosition', city)
      this.$router.push({name: 'index'})
    }
  },
  created () {
    let data = [
      {
        id: 59,
        name: '成都',
        pinyin: 'chengdu',
        acronym: 'cd',
        rank: 'A',
        firstChar: 'C'
      },
      {
        id: 302,
        name: '自贡',
        pinyin: 'zigong',
        acronym: 'zg',
        rank: 'E',
        firstChar: 'Z'
      },
      {
        id: 303,
        name: '攀枝花',
        pinyin: 'panzhihua',
        acronym: 'panzhihua',
        rank: 'E',
        firstChar: 'P'
      },
      {
        id: 304,
        name: '泸州',
        pinyin: 'luzhou',
        acronym: 'luzhou',
        rank: 'E',
        firstChar: 'L'
      },
      {
        id: 305,
        name: '德阳',
        pinyin: 'deyang',
        acronym: 'deyang',
        rank: 'D',
        firstChar: 'D'
      },
      {
        id: 306,
        name: '绵阳',
        pinyin: 'mianyang',
        acronym: 'my',
        rank: 'C',
        firstChar: 'M'
      },
      {
        id: 307,
        name: '广元',
        pinyin: 'guangyuan',
        acronym: 'guangyuan',
        rank: 'E',
        firstChar: 'G'
      },
      {
        id: 308,
        name: '遂宁',
        pinyin: 'suining',
        acronym: 'suining',
        rank: 'E',
        firstChar: 'S'
      },
      {
        id: 309,
        name: '内江',
        pinyin: 'neijiang',
        acronym: 'scnj',
        rank: 'E',
        firstChar: 'N'
      },
      {
        id: 310,
        name: '乐山',
        pinyin: 'leshan',
        acronym: 'ls',
        rank: 'D',
        firstChar: 'L'
      },
      {
        id: 311,
        name: '南充',
        pinyin: 'nanchong',
        acronym: 'nanchong',
        rank: 'D',
        firstChar: 'N'
      },
      {
        id: 312,
        name: '眉山',
        pinyin: 'meishan',
        acronym: 'ms',
        rank: 'E',
        firstChar: 'M'
      },
      {
        id: 313,
        name: '宜宾',
        pinyin: 'yibin',
        acronym: 'yb',
        rank: 'D',
        firstChar: 'Y'
      },
      {
        id: 314,
        name: '广安',
        pinyin: 'guangan',
        acronym: 'ga',
        rank: 'E',
        firstChar: 'G'
      },
      {
        id: 315,
        name: '达州',
        pinyin: 'dazhou',
        acronym: 'dazhou',
        rank: 'D',
        firstChar: 'D'
      },
      {
        id: 316,
        name: '雅安',
        pinyin: 'yaan',
        acronym: 'ya',
        rank: 'F',
        firstChar: 'Y'
      },
      {
        id: 317,
        name: '巴中',
        pinyin: 'bazhong',
        acronym: 'bazhong',
        rank: 'E',
        firstChar: 'B'
      },
      {
        id: 318,
        name: '资阳',
        pinyin: 'ziyang',
        acronym: 'zy',
        rank: 'E',
        firstChar: 'Z'
      },
      {
        id: 319,
        name: '阿坝',
        pinyin: 'aba',
        acronym: 'ab',
        rank: 'Z',
        firstChar: 'A'
      },
      {
        id: 320,
        name: '甘孜',
        pinyin: 'ganzi',
        acronym: 'ganzi',
        rank: 'Z',
        firstChar: 'G'
      },
      {
        id: 321,
        name: '凉山',
        pinyin: 'liangshan',
        acronym: 'liangshan',
        rank: 'E',
        firstChar: 'L'
      },
      {
        id: 417,
        name: '峨眉山',
        pinyin: 'emeishan',
        acronym: 'ems',
        rank: 'F',
        firstChar: 'E'
      },
      {
        id: 483,
        name: '九寨沟',
        pinyin: 'jiuzhaigou',
        acronym: 'jzg',
        rank: 'Z',
        firstChar: 'J'
      },
      {
        id: 576,
        name: '都江堰',
        pinyin: 'dujiangyan',
        acronym: 'djy',
        rank: 'E',
        firstChar: 'D'
      },
      {
        id: 585,
        name: '彭州',
        pinyin: 'pengzhou',
        acronym: 'pengzhou',
        rank: 'E',
        firstChar: 'P'
      },
      {
        id: 593,
        name: '广汉',
        pinyin: 'guanghan',
        acronym: 'gh',
        rank: 'F',
        firstChar: 'G'
      },
      {
        id: 605,
        name: '简阳',
        pinyin: 'jianyang',
        acronym: 'jianyang',
        rank: 'F',
        firstChar: 'J'
      },
      {
        id: 634,
        name: '阆中',
        pinyin: 'langzhong',
        acronym: 'langzhong',
        rank: 'F',
        firstChar: 'L'
      },
      {
        id: 646,
        name: '崇州',
        pinyin: 'chongzhou',
        acronym: 'chongzhou',
        rank: 'F',
        firstChar: 'C'
      },
      {
        id: 647,
        name: '邛崃',
        pinyin: 'qionglai',
        acronym: 'ql',
        rank: 'F',
        firstChar: 'Q'
      },
      {
        id: 699,
        name: '安岳',
        pinyin: 'anyue',
        acronym: 'anyue',
        rank: 'F',
        firstChar: 'A'
      },
      {
        id: 749,
        name: '仁寿',
        pinyin: 'renshou',
        acronym: 'renshou',
        rank: 'F',
        firstChar: 'R'
      },
      {
        id: 788,
        name: '金堂',
        pinyin: 'jintang',
        acronym: 'jintang',
        rank: 'F',
        firstChar: 'J'
      },
      {
        id: 823,
        name: '隆昌市',
        pinyin: 'longchangshi',
        acronym: 'longchang',
        rank: 'F',
        firstChar: 'L'
      },
      {
        id: 888,
        name: '富顺',
        pinyin: 'fushunxian',
        acronym: 'fushunxian',
        rank: 'F',
        firstChar: 'F'
      },
      {
        id: 906,
        name: '绵竹',
        pinyin: 'mianzhu',
        acronym: 'mianzhu',
        rank: 'F',
        firstChar: 'M'
      },
      {
        id: 910,
        name: '大竹',
        pinyin: 'dazhu',
        acronym: 'dazhu',
        rank: 'F',
        firstChar: 'D'
      },
      {
        id: 927,
        name: '江油',
        pinyin: 'jiangyou',
        acronym: 'jiangyou',
        rank: 'F',
        firstChar: 'J'
      },
      {
        id: 953,
        name: '什邡',
        pinyin: 'shifang',
        acronym: 'shifang',
        rank: 'F',
        firstChar: 'S'
      },
      {
        id: 971,
        name: '大邑',
        pinyin: 'dayi',
        acronym: 'dayi',
        rank: 'F',
        firstChar: 'D'
      },
      {
        id: 992,
        name: '射洪市',
        pinyin: 'shehongshi',
        acronym: 'shehong',
        rank: 'F',
        firstChar: 'S'
      },
      {
        id: 1043,
        name: '营山县',
        pinyin: 'yingshanxian',
        acronym: 'yingshanxian',
        rank: 'F',
        firstChar: 'Y'
      },
      {
        id: 1053,
        name: '南部县',
        pinyin: 'nanbuxian',
        acronym: 'nanbuxian',
        rank: 'F',
        firstChar: 'N'
      },
      {
        id: 1144,
        name: '泸县',
        pinyin: 'luxian',
        acronym: 'luxian',
        rank: 'F',
        firstChar: 'L'
      },
      {
        id: 1145,
        name: '合江县',
        pinyin: 'hejiangxian',
        acronym: 'hejiangxian',
        rank: 'F',
        firstChar: 'H'
      },
      {
        id: 1150,
        name: '苍溪县',
        pinyin: 'cangxixian',
        acronym: 'cangxixian',
        rank: 'F',
        firstChar: 'C'
      },
      {
        id: 1167,
        name: '新津县',
        pinyin: 'xinjinxian',
        acronym: 'xinjinxian',
        rank: 'F',
        firstChar: 'X'
      },
      {
        id: 1200,
        name: '中江县',
        pinyin: 'zhongjiangxian',
        acronym: 'zhongjiangxian',
        rank: 'F',
        firstChar: 'Z'
      },
      {
        id: 1207,
        name: '旺苍县',
        pinyin: 'wangcangxian',
        acronym: 'wangcangxian',
        rank: 'F',
        firstChar: 'W'
      },
      {
        id: 1211,
        name: '三台县',
        pinyin: 'santaixian',
        acronym: 'santaixian',
        rank: 'F',
        firstChar: 'S'
      },
      {
        id: 1212,
        name: '安州区',
        pinyin: 'anzhouqu',
        acronym: 'anzhouqu',
        rank: 'F',
        firstChar: 'A'
      },
      {
        id: 1214,
        name: '平昌县',
        pinyin: 'pingchangxian',
        acronym: 'pingchangxian',
        rank: 'F',
        firstChar: 'P'
      },
      {
        id: 1215,
        name: '通江县',
        pinyin: 'tongjiangxian',
        acronym: 'tongjiangxian',
        rank: 'F',
        firstChar: 'T'
      },
      {
        id: 1216,
        name: '米易县',
        pinyin: 'miyixian',
        acronym: 'miyixian',
        rank: 'F',
        firstChar: 'M'
      }
    ]
    api.getcityList().then((res) => {
      let obj = {},
        obj1 = {}
      res.forEach((item, index) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = []
        }
        obj[item.firstChar.toUpperCase()].push(item)
      })

      let arr = Object.keys(obj).sort()
      arr.forEach((item) => {
        obj1[item] = obj[item]
      })
      this.cityGroup = obj1
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/css/changecity/categroy.scss';
</style>
