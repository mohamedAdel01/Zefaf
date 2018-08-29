const express = require('express')
const router = express.Router()
const authPolices = require('../../policies/authPolicies')
const authcontrolles = require('../../controlles/authcontrolles')
const dataControlls = require('../../controlles/dataControlls')
const MNGAuthControlles = require('../../controlles/MNG-Auth-Controlles')
const MNGDataControlles = require('../../controlles/MNG-Data-Controlles')
const IMGControlles = require('../../controlles/IMG-Controlles')


// ---------------------------{ ROUTING }-----------------------------------

// MNG ROUTING {POST} REQ
  // AUTH
  router.post('/MNG/adduser', authPolices.register, MNGAuthControlles.MNGAddUser)
  router.post('/MNG/login', MNGAuthControlles.MNGLogin)

  // ADD MEMBERS
  router.post('/MNG/addMember/:model', MNGDataControlles.addMember)

// MNG ROUTING {GET} REQ
  router.get('/MNG/getservicesitems',  MNGDataControlles.getServicesItems)

// AUTHENTICATION ROUTING
  router.post('/register', authPolices.register, authcontrolles.register)
  router.post('/login', authcontrolles.login)
  
// WEDDING COMPONENTS ROUTING
  router.get('/details/:sort', dataControlls.show)

// ROUTING FOR IMAGES 
  router.post('/saveImages/:folder/:sub', IMGControlles.SaveImgs)

module.exports = router
