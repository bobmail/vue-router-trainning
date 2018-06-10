import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/params'
import Hi1 from '@/components/Hi1'
//  import Hi2 from '@/components/Hi2'

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
    },
    {
      path: '/hi1',
      component: Hi1,
      alias: '/hi1alias'
    }
  ]
})
