import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/main-Components/Home'
import Register from '@/components/main-Components/Register'
import Login from '@/components/main-Components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
