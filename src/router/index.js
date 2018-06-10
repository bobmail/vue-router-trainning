import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/params'
import Hi1 from '@/components/Hi1'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/params/:newsID(\\d+)/:newsTitle',
      component: Params
      /*
      beforeEnter: (to, from, next) => {
        console.log(to)
        console.log(from)
        next('/')
      }
      */
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goParams/:newsID(\\d+)/:newsTitle',
      redirect: '/params/:newsID(\\d+)/:newsTitle'
    },
    {
      path: '/hi1',
      component: Hi1,
      alias: '/hi1alias'
    },
    {
      path: '*',
      component: Error
    }
  ]
})
