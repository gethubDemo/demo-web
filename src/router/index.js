import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '../view/test.vue'
import login from '../../src/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },{
      path:'login',
      component:login,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/test',
      component:test
    }
  ]
})
