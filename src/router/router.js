import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/', redirect: '/home'},
  { path: '/home', component: () => import('../views/home/Home.vue') },
  { path: '/login', component: () => import('../views/Login.vue') },
]


const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})


export default router