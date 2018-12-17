import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '../view/test.vue'
import login from '../view/login-page/login.vue'
import register from '../view/register-page/register.vue'
import pageIntro from '../view/page-intro/page-intro.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    // },
    // {
    //   path:'/login',
    //   component:login,
    //   meta:{
    //     requireAuth:true
    //   }
    // },
    {path:'/login',
    component:login
  },
  {
    path:'/register',
    component:register
  },
    {
      path:'/test',
      component:test
    },{
      path:'/',
      component:pageIntro
    }
  ]
})
