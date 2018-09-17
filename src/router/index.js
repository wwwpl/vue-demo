import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import loginCenter from '@/page/loginCenter'
import main from '@/page/main/main'
import mainFirstPage from '@/page/main/son/mainFirstPage'
import mainApplyPage from '@/page/main/son/mainApplyPage'
import mainUserPage from '@/page/main/son/mainUserPage'

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
      component: main,
      children: [
        {
          path: '/mainFirstPage',
          name: 'mainFirstPage',
          component: mainFirstPage,
          meta: {
            title: '首页'
          }
        }
      ]
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      meta: {
        title: '数据列表'
      },
      children: [
        {
          path: '/mainUserPage',
          name: 'mainUserPage',
          component: mainUserPage,
          meta: {
            title: '用户管理'
          }
        },
        {
          path: '/mainApplyPage',
          name: 'mainApplyPage',
          component: mainApplyPage,
          meta: {
            title: '应用管理'
          }
        }
      ]
    }
  ]
})
