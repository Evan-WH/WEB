// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
//导入elment模块
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router'
import {routes} from './router'



Vue.use(VueRouter)  
Vue.use(VueAxios,axios)
Vue.use(ElementUI)

Vue.config.productionTip = false
const router =new VueRouter({
  routes:routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
