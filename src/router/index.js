import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Home from "../components/Home";
import MyPage from "../components/MyPage";
import SignUp from "../components/SignUp";
import store from '../store'
import ArticleList from "../components/ArticleList";

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  store.getters.isLogin ? next() : next(loginPath)
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/sign-up',
      component: SignUp
    },
    {
      path: '/accounts/:aid',
      component: MyPage,
      beforeEnter: requireAuth
    },
    {
      path: '/articles',
      component: ArticleList
    }

  ]
})

export default router
