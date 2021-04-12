// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// Router
import router from './router'
import VueRouter from 'vue-router'
// ElemetUi
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.config.productionTip = false
Vue.use(Elementui)
Vue.use(VueRouter)
Vue.use(router)
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
