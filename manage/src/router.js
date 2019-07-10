import Vue from 'vue'
import Router from 'vue-router'

import Main from './views/Main.vue'
import About from './views/About.vue'
import BookAdd from './views/BookAdd.vue'
import DashBoard from './views/DashBoard.vue'
import Requested from './views/Requested.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'main', component: Main },
    { path: '/about', name: 'about', component: About },
    { path: '/dashboard', name: 'dashboard', component: DashBoard },
    { path: '/book/add', name: 'bookAdd', component: BookAdd },
    { path: '/requested', name: 'requested', component: Requested },
  ]
})
