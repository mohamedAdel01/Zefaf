const authPolices = require('../../policies/authPolicies')
const authcontrolles = require('../../controlles/authcontrolles')
const dataControlls = require('../../controlles/dataControlls')
const upload = require('../index').upload

module.exports = (app) => {
  app.post('/register', authPolices.register, authcontrolles.register)
  app.post('/login', authcontrolles.login)

  app.get('/details/:sort', dataControlls.show)

  // test ==========================================================
  app.post('/saveImage', (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        console.log(err)
        return
      }
      res.send(req.file)
    })
  })
}