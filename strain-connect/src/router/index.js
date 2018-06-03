import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Step from '@/components/Step'
import Intro from '@/components/Intro'
import Ailments from '@/components/Ailments'
import Effects from '@/components/Effects'
import Personality from '@/components/Personality'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: Login
    // },
    {
    	path: '/',
    	name: 'Intro',
    	component: Intro
    },
    {
      path: '/ailments',
      name: 'Ailments',
      component: Ailments
    },
    {
      path: '/effects',
      name: 'Effects',
      component: Effects
    },
    {
      path: '/personality',
      name: 'Personality',
      component: Personality
    }
    // {
    // 	path: '/step/:num',
    // 	name: 'Step',
    // 	component: Step
    // }
  ]
})
