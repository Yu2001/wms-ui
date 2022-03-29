import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path:'/',
    name:'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/demo1',
    name:'demo1',
    component: () => import('../views/demo1')
  },
  {
    path: '/demo2',
    name:'demo1',
    component: () => import('../views/demo2')
  }
]

const router = new VueRouter({
  routes
})

export default router
