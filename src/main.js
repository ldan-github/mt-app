// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import store from './store/store.js'
import './axios/axios.js'

import router from './router'

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.directive('document-click', {
  bind (el, binding, vnode) {
    document.addEventListener('click', binding.value, false)
  }

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
