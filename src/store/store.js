import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    position: {},
    userName: '请登录',
    dedailData: null
  },
  mutations: {
    setPosition (state, val) {
      state.position = val
    },
    setUserName (state, val) {
      state.userName = val
    }
  },
  actions: {
    setPosition ({commit}, val) {
      // 异步请求
      commit('setPosition', val)
    },
    setUserName ({commit}, val) {
      commit('setUserName', val)
    }
  }

})

export default store
