// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
// import router from './router'

// 创建一个 vm 对象，作为全局事件总线(对象) 保存到 Vue 原型对象上，所有的组件都能直接可见
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})
