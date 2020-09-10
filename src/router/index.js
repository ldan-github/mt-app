import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import goodsList from '@/page/goodsList.vue'
import proDeatial from '@/page/proDeatial.vue'
import changeCity from '@/page/changeCity.vue'
import login from '@/page/login.vue'
import register from '@/page/register.vue'
import user from '@/page/user.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'defaultPage',
    component: defaultPage,
    redirect: '/index',
    children: [{
      path: 's/:name',
      name: 'goods',
      component: goodsList

    },
    {
      path: 'title',
      name: 'proDeatial',
      component: proDeatial
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/changeCity',
      name: 'changeCity',
      component: changeCity
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }

    ]
  },
  {
    path: '/',
    name: 'blankPage',
    component: blankPage,
    children: [{
      path: 'login',
      name: 'login',
      component: login
    },
    {
      path: 'register',
      name: 'register',
      component: register
    }
    ]
  }

  ],
  mode: 'history'
})
