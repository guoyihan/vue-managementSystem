import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = resolve => require(['../views/Login.vue'], resolve);
const Home = resolve => require(['../views/Home.vue'], resolve);



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
