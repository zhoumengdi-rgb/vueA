// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"

import VueAwesomeSwiper from 'vue-awesome-swiper' //全局swiper
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

// 全局样式
import './assets/css/reset.css'
import './assets/css/iconfont.css'
// 相应布局
import './assets/js/font.js'

import axios from 'axios'
Vue.prototype.axios = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
