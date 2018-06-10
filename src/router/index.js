import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/params'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/params/:newsID(\\d+)/:newsTitle',
      component: Params
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goParams/:newsID(\\d+)/:newsTitle',
      redirect: '/params/:newsID(\\d+)/:newsTitle'
    }
  ]
})
