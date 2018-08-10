import Vue from 'vue'
import Router from 'vue-router'
// MAIN COMPONENTS
import Home from '@/components/main-Components/Home'
import Register from '@/components/main-Components/Register'
import Login from '@/components/main-Components/Login'
// APPLICATION COMPONENTS
import Application from '@/components/app-Components/Application'
// WEDDING COMPONENTS
import Accessories from '@/components/main-Components/Wedding-Componenets/Accessories'
import Furniture from '@/components/main-Components/Wedding-Componenets/Furniture'
import HairStyle from '@/components/main-Components/Wedding-Componenets/Hair-Style'
import Honeymoon from '@/components/main-Components/Wedding-Componenets/Honeymoon'
import Hotels from '@/components/main-Components/Wedding-Componenets/Hotels'
import Photographers from '@/components/main-Components/Wedding-Componenets/Photographers'
import WeddingCakes from '@/components/main-Components/Wedding-Componenets/Wedding-Cakes'
import WeddingCars from '@/components/main-Components/Wedding-Componenets/Wedding-Cars'
import WeddingClothes from '@/components/main-Components/Wedding-Componenets/Wedding-Clothes'
import WeddingFlowers from '@/components/main-Components/Wedding-Componenets/Wedding-Flowers'
import WeddingHalls from '@/components/main-Components/Wedding-Componenets/Wedding-Halls'
import WeddingInvitations from '@/components/main-Components/Wedding-Componenets/Wedding-Invitations'
import WeddingMusic from '@/components/main-Components/Wedding-Componenets/Wedding-Music'
// DETAILS COMPONENTS
import Details from '@/components/main-Components/details-Components/Details'
// MNG COMPONENTS
import MNGlogin from '@/components/MNG-Components/MNGlogin'
import Management from '@/components/MNG-Components/Management'



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
      path: '/accessories',
      name: 'Accessories',
      component: Accessories
    },
    {
      path: '/furniture',
      name: 'Furniture',
      component: Furniture
    },
    {
      path: '/hairStyle',
      name: 'HairStyle',
      component: HairStyle
    },
    {
      path: '/honeymoon',
      name: 'Honeymoon',
      component: Honeymoon
    },
    {
      path: '/hotels',
      name: 'Hotels',
      component: Hotels
    },
    {
      path: '/photographers',
      name: 'Photographers',
      component: Photographers
    },
    {
      path: '/weddingcakes',
      name: 'WeddingCakes',
      component: WeddingCakes
    },
    {
      path: '/weddingcars',
      name: 'WeddingCars',
      component: WeddingCars
    },
    {
      path: '/weddingclothes',
      name: 'WeddingClothes',
      component: WeddingClothes
    },
    {
      path: '/weddingflowers',
      name: 'WeddingFlowers',
      component: WeddingFlowers
    },
    {
      path: '/weddinghalls',
      name: 'WeddingHalls',
      component: WeddingHalls
    },
    {
      path: '/weddinginvitations',
      name: 'WeddingInvitations',
      component: WeddingInvitations
    },
    {
      path: '/weddingmusic',
      name: 'WeddingMusic',
      component: WeddingMusic
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/app',
      name: 'Application',
      component: Application
    },
    {
      path: '/mng/login',
      name: 'MNGlogin',
      component: MNGlogin
    },
    {
      path: '/mng/management',
      name: 'Management',
      component: Management
    }

  ]
})
