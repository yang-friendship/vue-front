import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Home from "../components/Home";
import MyPage from "../components/MyPage";
import SignUp from "../components/SignUp";
import BoardList from "../components/BoardList";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path : '/',
      component : Home
    },
    {
      path : '/login',
      component : Login
    },
    {
      path : '/sign-up',
      component : SignUp
    },
    {
      path : '/accounts/:aid',
      component : MyPage
    },
    {
      path : '/boards/:bid:',
      component : BoardList
    }


    // {
    //   path: '*',
    //   component: NotFound
    // }
  ]
})

export default router
