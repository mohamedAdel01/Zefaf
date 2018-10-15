import Vue from 'vue'
import Router from 'vue-router'
// MAIN COMPONENTS
import Home from '@/components/User-Components/Home'
import Register from '@/components/User-Components/Register'
import Login from '@/components/User-Components/Login'
// APPLICATION COMPONENTS
import Application from '@/components/Clients-Components/Application'
// WEDDING COMPONENTS
import Accessories from '@/components/User-Components/Wedding-Componenets/Accessories'
import Furniture from '@/components/User-Components/Wedding-Componenets/Furniture'
import HairStyle from '@/components/User-Components/Wedding-Componenets/Hair-Style'
import Honeymoon from '@/components/User-Components/Wedding-Componenets/Honeymoon'
import Hotels from '@/components/User-Components/Wedding-Componenets/Hotels'
import Photographers from '@/components/User-Components/Wedding-Componenets/Photographers'
import WeddingCakes from '@/components/User-Components/Wedding-Componenets/Wedding-Cakes'
import WeddingCars from '@/components/User-Components/Wedding-Componenets/Wedding-Cars'
import WeddingClothes from '@/components/User-Components/Wedding-Componenets/Wedding-Clothes'
import WeddingFlowers from '@/components/User-Components/Wedding-Componenets/Wedding-Flowers'
import WeddingHalls from '@/components/User-Components/Wedding-Componenets/Wedding-Halls'
import WeddingInvitations from '@/components/User-Components/Wedding-Componenets/Wedding-Invitations'
import WeddingMusic from '@/components/User-Components/Wedding-Componenets/Wedding-Music'
// DETAILS COMPONENTS
import Details from '@/components/User-Components/details-Components/Details'
// MNG COMPONENTS
import MNGlogin from '@/components/MNG-Components/MNGlogin'
import Management from '@/components/MNG-Components/Management'
import WeddingHallsList from '@/components/MNG-Components/MNG-Lists/WeddingHalls-List'
import HairStyleList from '@/components/MNG-Components/MNG-Lists/HairStyle-List'
import HoneymoonList from '@/components/MNG-Components/MNG-Lists/Honeymoon-List'
import WeddingCarsList from '@/components/MNG-Components/MNG-Lists/WeddingCars-List'
import InvitationCardsList from '@/components/MNG-Components/MNG-Lists/InvitationCards-List'
import PhotographersList from '@/components/MNG-Components/MNG-Lists/Photographers-List'
import FlowersList from '@/components/MNG-Components/MNG-Lists/Flowers-List'
import WeddingSuitsList from '@/components/MNG-Components/MNG-Lists/WeddingSuits-List'
import WeddingDressList from '@/components/MNG-Components/MNG-Lists/WeddingDress-List'



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
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/clients',
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
      component: Management,
      children: [
        {
          path: '/mng/management/weddinghalls',
          name: 'WeddingHallsList',
          component: WeddingHallsList
        },
        {
          path: '/mng/management/hairstyle',
          name: 'HairStyleList',
          component: HairStyleList
        },
        {
          path: '/mng/management/honeymoon',
          name: 'HoneymoonList',
          component: HoneymoonList
        },
        {
          path: '/mng/management/weddingcars',
          name: 'WeddingCarsList',
          component: WeddingCarsList
        },
        {
          path: '/mng/management/invitationcards',
          name: 'InvitationCardsList',
          component: InvitationCardsList
        },
        {
          path: '/mng/management/photographers',
          name: 'PhotographersList',
          component: PhotographersList
        },
        {
          path: '/mng/management/flowers',
          name: 'FlowersList',
          component: FlowersList
        },
        {
          path: '/mng/management/weddingsuits',
          name: 'WeddingSuitsList',
          component: WeddingSuitsList
        },
        {
          path: '/mng/management/weddingdress',
          name: 'WeddingDressList',
          component: WeddingDressList
        }
      ]
    },


  ]
})
