import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import StepOne from '@/components/StepOne'
import Intro from '@/components/Intro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/intro',
    	name: 'Intro',
    	component: Intro
    },
    {
    	path: '/stepone',
    	name: 'StepOne',
    	component: StepOne
    }
  ]
})
