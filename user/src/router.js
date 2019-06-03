import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import GithubLogin from './views/GithubLogin'
import ManageMain from './views/ManageMain'
import NotFound from './views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/githublogin', name: 'githublogin', component: GithubLogin },
    { path: '/main', name: 'managemain', component: ManageMain},
    { path: '*', component: NotFound },
  ]
})
