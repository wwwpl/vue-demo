import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import loginCenter from '@/page/loginCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/loginCenter',
      name: 'loginCenter',
      component: loginCenter
    }
  ]
})
