import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册index的路由
import Login from '@/views/login/login.vue/'
import Home from '@/views/home/index.vue'
import Layout from '@/views/layout/'

Vue.use(VueRouter)

// 路由配置表
const routes = [
  // 配置login的路由配置
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    // name: 'layout', // 路由layout有一个默认子路由，这个名字没有意义，所以，后台会出警告，不是报错，正确的做法是，如果父路由有默认子路由，就不要给这个父路由起name
    component: Layout,
    children: [// 把home组件当作子路由放在layout中
      {
        path: '', // path为空，会作为默认子路由渲染
        name: 'home',
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
