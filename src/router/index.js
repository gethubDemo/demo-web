import Vue from 'vue'
import Router from 'vue-router'
import test from '../view/test.vue'
import loginPage from '../view/login-page/login-page.vue'
import pageIntro from '../view/page-intro/page-intro.vue'
import CommonPage from '../components/commonPage.vue'
import registerPage from '../view/register-page/register-page.vue'
import hrRegisterPage from '../view/hrRegister-page/hrRegister-page.vue'
import userInfoPage from '../view/userInfo-page/userInfo-page.vue'
import hrInfoPage from '../view/hrInfo-page/hrInfo-page.vue'
import jobInfo from '../view/page-intro/job-info/job-info.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/test',
      component: test
    }, {
      path: '/',
      component: CommonPage,
      children: [{
        path: '/',
        component: pageIntro
      }, {
        path: '/userInfo',
        component: userInfoPage
      },{
        path:'/hrInfo',
        component:hrInfoPage
      }]
    },
    {
      path: '/login',
      component: loginPage
    },
    {
      path: '/register',
      component: registerPage
    },
    {
      path: '/hrRegister',
      component: hrRegisterPage
    },{
      path:'/jobInfo',
      component:jobInfo
    }
  ]
})