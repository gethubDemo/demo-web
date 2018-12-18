import Vue from 'vue'
import Router from 'vue-router'
import test from '../view/test.vue'
// import login from '../../src/login.vue'
import pageIntro from '../view/page-intro/page-intro.vue'
import CommonPage from '../components/commonPage.vue'
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
    {
      path:'/test',
      component:test
    },{
      path:'/',
      component: CommonPage,
      children:[
        {
          path:'/',
          component:pageIntro
        }
      ]
      
    }
    // ,{
    //   path:'/login'

    // }
  ]
})
