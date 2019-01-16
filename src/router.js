import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Projects from './views/Projects.vue'
import Inputs from './views/Inputs.vue'
import Templates from './views/Templates.vue'
import PageNotFound from './views/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/inputs/:input_section?',
      name:'inputs',
      component: Inputs,
    },
    // {
    //   path: '/inputs',
    //   redirect: '/inputs/:input_section'
    // },
    {
      path: '/templates',
      name: 'templates',
      component: Templates
    },
    {
      path:'*',
      component: PageNotFound,
    }
  ]
})
