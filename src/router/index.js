import Vue from 'vue'
import VueRouter from 'vue-router'
import vLogin from '../components/page/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 设置URL
    path: '/home',
    name: 'vHome',
    // 设置对应组件
    component: () => import('../components/common/Home.vue'),
    children: [
      {
        path: 'child',
        component: () => import('../components/page/Children.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'vLogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: vLogin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
