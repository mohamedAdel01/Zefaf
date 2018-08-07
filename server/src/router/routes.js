const express = require('express')
const authPolices = require('../../policies/authPolicies')
const authcontrolles = require('../../controlles/authcontrolles')
const dataControlls = require('../../controlles/dataControlls')
const upload = require('../config/mongoDB').upload
const router = express.Router()

// -------------------------ROUTING-----------------------------------

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
