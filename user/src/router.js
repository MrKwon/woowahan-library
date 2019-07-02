import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/Main.vue'
import Search from '@/views/Search'
import BookDesc from '@/views/BookDesc'
import CodeReader from '@/views/CodeReader'
import Login from '@/views/Login'

import RequestBook from '@/views/RequestBook'
import CurrentRental from '@/views/CurrentRental'
import Reservation from '@/views/Reservation'
import Favorite from '@/views/Favorite'
import History from '@/views/History'

import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'main', component: Main },
    { path: '/search', name: 'search', component: Search },
    { path: '/book', name: 'book', component: BookDesc, props: (route) => ({ id: route.query.id }) },
    { path: '/rent', name: 'rent', component: CodeReader },
    { path: '/login', name: 'login', component: Login },
    { path: '/request_book', name: 'request_book', component: RequestBook },
    { path: '/current_rental', name: 'current_rental', component: CurrentRental },
    { path: '/reservation', name: 'reservation', component: Reservation },
    { path: '/favorite', name: 'favorite', component: Favorite },
    { path: '/history', name: 'history', component: History },
    { path: '*', component: NotFound }
  ]
})
