import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import CityList from "../components/List/CityList.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/city',
      component: CityList
    }
  ]
})
