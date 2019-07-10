import Vue from 'vue'
import Router from 'vue-router'

import Main from './views/Main.vue'
import About from './views/About.vue'
import BookAdd from './views/BookAdd.vue'
import DashBoard from './views/DashBoard.vue'
import Requested from './views/Requested.vue'
import Books from './views/Books'

import store from '@/store'

Vue.use(Router)

const requireAuth = (from, to, next) => {
  const isUserLoggedIn = store.state.isUserLoggedIn
  if (!isUserLoggedIn) {
    next('/')
  }
  next()
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'main', component: Main },
    { path: '/about', name: 'about', component: About },
    { path: '/dashboard', name: 'dashboard', component: DashBoard, beforeEnter: requireAuth },
    { path: '/book/add', name: 'bookAdd', component: BookAdd, beforeEnter: requireAuth },
    { path: '/requested', name: 'requested', component: Requested, beforeEnter: requireAuth },
    { path: '/books', name: 'books', component: Books, beforeEnter: requireAuth },
  ]
})
