// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import {post,put,patch,get} from './utils/http'
import axiosApi from './api/axios.js'

Vue.use(axiosApi)
Vue.prototype.$post=post
Vue.prototype.$get=get
Vue.prototype.$put=put
Vue.prototype.$patch=patch

Vue.prototype.$ajax = axios
// 需二次封装，只可在指定环境中使用get，post
Vue.use(Element);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
