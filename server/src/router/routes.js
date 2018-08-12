const express = require('express')
const router = express.Router()
const upload = require('../config/mongoDB').upload
const authPolices = require('../../policies/authPolicies')
const authcontrolles = require('../../controlles/authcontrolles')
const dataControlls = require('../../controlles/dataControlls')
const MNGAuthControlles = require('../../controlles/MNG-Auth-Controlles')
const MNGDataControlles = require('../../controlles/MNG-Data-Controlles')

// ---------------------------ROUTING-----------------------------------

// MNG ROUTING
  router.post('/MNG/adduser', authPolices.register, MNGAuthControlles.MNGAddUser)
  router.post('/MNG/login', MNGAuthControlles.MNGLogin)

  router.get('/MNG/getservicesitems',  MNGDataControlles.getServicesItems)

// AUTHENTICATION ROUTING
  router.post('/register', authPolices.register, authcontrolles.register)
  router.post('/login', authcontrolles.login)
  
// WEDDING COMPONENTS ROUTING
  router.get('/details/:sort', dataControlls.show)

// test ==========================================================
  router.post('/saveImage', (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        console.log(err)
        return
      }
      res.send(req.file)
    })
  })
// ===================================================================

module.exports = router
