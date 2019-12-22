import Vue from 'vue'
import VueRouter from 'vue-router'

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
        path: 'child1',
        component: () => import('../components/page/Children1.vue')
      },
      {
        path: 'child2',
        component: () => import('../components/page/Children2.vue')
      },
      {
        path: 'child3',
        component: () => import('../components/page/Children3.vue')
      },
      {
        path: 'first',
        component: () => import('../components/page/First.vue')
      },
      {
        path: 'second',
        component: () => import('../components/page/Second.vue')
      }
    ]
  },
  {
    path: '/demo',
    component: () => import('../components/page/EleDemo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
