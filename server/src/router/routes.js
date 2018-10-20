const express = require('express')
const router = express.Router()
const authPolices = require('../../policies/authPolicies')
const authcontrolles = require('../../controlles/authcontrolles')
const dataControlls = require('../../controlles/dataControlls')
const MNGAuthControlles = require('../../controlles/MNG-Auth-Controlles')
const ClientsAuthControlles = require('../../controlles/Clients-Auth-Controlles')
const ClientsDataControlles = require('../../controlles/Clients-Data-Controlles')
const MNGDataControlles = require('../../controlles/MNG-Data-Controlles')
const IMGControlles = require('../../controlles/IMG-Controlles')
const NuserControlles = require('../../controlles/Nuser-Controlles')


// ---------------------------{ ROUTING }-----------------------------------
// MNG ROUTING {POST} REQ
  // AUTH
  router.post('/MNG/adduser', authPolices.register, MNGAuthControlles.MNGAddUser)
  router.post('/MNG/login', MNGAuthControlles.MNGLogin)

  // ADD MEMBERS
  router.post('/MNG/addMember/:model', authPolices.isAuthenticated, MNGDataControlles.addMember)

// MNG ROUTING {GET} REQ
  router.get('/MNG/getservicesitems',  MNGDataControlles.getServicesItems)

// CLIENTS ROUTING {POST} REQ
  // AUTH
  router.post('/clients/adduser', authPolices.register, ClientsAuthControlles.ClientsAddUser) // we will add authPolices after
  router.post('/clients/login', ClientsAuthControlles.ClientsLogin)

  // GET DATA
  router.post('/clients/getdata', ClientsDataControlles.getData)

// AUTHENTICATION ROUTING
  router.post('/register', authPolices.register, authcontrolles.register)
  router.post('/login', authcontrolles.login)
  
// WEDDING COMPONENTS ROUTING
  router.get('/details/:sort', dataControlls.show)
  router.get('/Nuser/:governorate', NuserControlles.getWeddingHalls)

// ROUTING FOR IMAGES 
  router.post('/saveImages/:folder/:sub', authPolices.isAuthenticated ,IMGControlles.SaveImgs)
  

module.exports = router
