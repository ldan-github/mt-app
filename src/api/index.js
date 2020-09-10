import axios from '@/axios/axios.js'

const api = {
  searchHotWords () {
    return axios('/api/meituan/header/searchHotWords.json')
  },
  search () {
    return axios('/api/meituan/header/search.json')
  },
  resultsByKeywords () {
    return axios('/api/meituan/index/resultsByKeywords.json')
  },
  nav () {
    return axios('/api/meituan/index/nav.json')
  },
  getprovince () {
    return axios('/api/meituan/city/province.json')
  },
  hot () {
    return axios('/api/meituan/city/hot.json')
  },
  recents () {
    return axios('/api/meituan/city/recents.json')
  },
  getgoodsList () {
    return axios('/api/meituan/list/goodsList.json')
  },
  getclassify () {
    return axios('/api/meituan/list/classify.json')
  },
  getareaList () {
    return axios('/api/meituan/list/areaList.json')
  },
  getPosition () {
    return axios('/api/meituan/city/getPosition.json')
  },
  getcityList () {
    return axios('/api/meituan/city/cityList.json')
  },
  getregister (params) {
    return axios('/api/meituan/register', params)
  },
  getrecommend () {
    return axios('/api/meituan/list/recommend.json')
  },
  getdetail () {
    return axios('/api/meituan/product/detail.json')
  }
}

export default api
