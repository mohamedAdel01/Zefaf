import Vue from 'vue'
import Router from 'vue-router'
// MAIN COMPONENTS
import Home from '@/components/main-Components/Home'
import Register from '@/components/main-Components/Register'
import Login from '@/components/main-Components/Login'
// APPLICATION COMPONENTS
import Application from '@/components/app-Components/Application'
import Accessories from '@/components/app-Components/Accessories'
import Furniture from '@/components/app-Components/Furniture'
import HairStyle from '@/components/app-Components/Hair-Style'
import Honeymoon from '@/components/app-Components/Honeymoon'
import Hotels from '@/components/app-Components/Hotels'
import Photographers from '@/components/app-Components/Photographers'
import WeddingCakes from '@/components/app-Components/Wedding-Cakes'
import WeddingCars from '@/components/app-Components/Wedding-Cars'
import WeddingClothes from '@/components/app-Components/Wedding-Clothes'
import WeddingFlowers from '@/components/app-Components/Wedding-Flowers'
import WeddingHalls from '@/components/app-Components/Wedding-Halls'
import WeddingInvitations from '@/components/app-Components/Wedding-Invitations'
import WeddingMusic from '@/components/app-Components/Wedding-Music'

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
    },
    {
      path: '/app',
      name: 'Application',
      component: Application
    },
    {
      path: '/app/accessories',
      name: 'Accessories',
      component: Accessories
    },
    {
      path: '/app/furniture',
      name: 'Furniture',
      component: Furniture
    },
    {
      path: '/app/hairStyle',
      name: 'HairStyle',
      component: HairStyle
    },
    {
      path: '/app/honeymoon',
      name: 'Honeymoon',
      component: Honeymoon
    },
    {
      path: '/app/hotels',
      name: 'Hotels',
      component: Hotels
    },
    {
      path: '/app/photographers',
      name: 'Photographers',
      component: Photographers
    },
    {
      path: '/app/weddingcakes',
      name: 'WeddingCakes',
      component: WeddingCakes
    },
    {
      path: '/app/weddingcars',
      name: 'WeddingCars',
      component: WeddingCars
    },
    {
      path: '/app/weddingclothes',
      name: 'WeddingClothes',
      component: WeddingClothes
    },
    {
      path: '/app/weddingflowers',
      name: 'WeddingFlowers',
      component: WeddingFlowers
    },
    {
      path: '/app/weddinghalls',
      name: 'WeddingHalls',
      component: WeddingHalls
    },
    {
      path: '/app/weddinginvitations',
      name: 'WeddingInvitations',
      component: WeddingInvitations
    },
    {
      path: '/app/weddingmusic',
      name: 'WeddingMusic',
      component: WeddingMusic
    }
  ]
})
