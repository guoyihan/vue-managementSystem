import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = resolve => require(['../views/Login.vue'], resolve);




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
    component: resolve => require(['../views/Home.vue'], resolve),
    children: [
      {
        path: 'data',
        component: resolve => require(['../views/Data.vue'], resolve),
      },
      {
        path: 'hotel-setting',
        component: resolve => require(['../views/Hotel.vue'], resolve),
      },
      {
        path: 'rooms-manage',
        component: resolve => require(['../views/Rooms.vue'], resolve),
      },
      {
        path: 'order',
        component: resolve => require(['../views/Order.vue'], resolve),
      },
      {
        path: 'access',
        component: resolve => require(['../views/Access.vue'], resolve),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass:'router-link-active',
  base: process.env.BASE_URL,
  routes
})

export default router
