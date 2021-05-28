import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/login/Login";
import Home from "../components/Home";
import MyPage from "../components/account/Account";
import SignUp from "../components/SignUp";
import store from '../store'
import ArticleList from "../components/article/ArticleList";
import ArticleRegister from "../components/article/ArticleRegister";
import Article from "../components/article/Article";
import ForgotEmail from "../components/login/ForgotEmail";
import ForgotPassword from "../components/login/ForgotPassword";

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
      component: SignUp,
    },
    {
      path: '/accounts/:aid',
      component: MyPage,
      beforeEnter: requireAuth
    },
    {
      path: '/articles',
      component: ArticleList,
    },
    {
      path : '/articles/register',
      component :ArticleRegister,
      beforeEnter: requireAuth
    },
    {
      path : '/articles/:aid',
      component : Article
    },
    {
      path : '/forgot-email',
      component : ForgotEmail
    },
    {
      path : '/forgot-password',
      component : ForgotPassword
    }
  ]
})

export default router
