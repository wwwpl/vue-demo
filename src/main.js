// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入路由
import router from './router'
// 引入UI
import ElementUI from 'element-ui'
// 引入UI主题
import 'element-ui/lib/theme-chalk/index.css'
// 引入VUEX
import store from './store/index.js'

import getUrl from './tools/getUrlParams'
// 开发模式
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
Vue.prototype.$getUrl = getUrl
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
