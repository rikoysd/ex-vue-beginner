import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ex01',
    name: 'About',
   
    component: () => import( '../views/Ex01.vue')
  },
  {
    path: '/ex02',
    name: 'About',
   
    component: () => import( '../views/Ex02.vue')
  },
  {
    path: '/ex03',
    name: 'About',
   
    component: () => import( '../views/Ex03.vue')
  },
  {
    path: '/ex04',
    name: 'About',
   
    component: () => import( '../views/Ex04.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
