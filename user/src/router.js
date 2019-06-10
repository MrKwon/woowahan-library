import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main.vue'
import Search from '@/views/Search'
import BookDesc from '@/views/BookDesc'
import NotFound from './views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'main', component: Main },
    { path: '/search', name: 'search', component: Search },
    { path: '/book', name: 'book', component: BookDesc, props: (route) => ({ id: route.query.id }) },
    { path: '*', component: NotFound },
  ]
})
