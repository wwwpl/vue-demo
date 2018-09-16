import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import loginCenter from '@/page/loginCenter'
import main from '@/page/main/main'

const mainFirstPage = r => require.ensure([], () => r(require('@/page/main/mainFirstPage')), 'mainFirstPage')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'loginCenter',
      component: loginCenter
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/mainFirstPage',
      name: 'mainFirstPage',
      component: mainFirstPage
    }
  ]
})
