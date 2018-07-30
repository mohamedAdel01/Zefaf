const authPolices = require('../../policies/authPolicies')
const authcontrolles = require('../../controlles/authcontrolles')
const dataControlls = require('../../controlles/dataControlls')

module.exports = (app) => {
    app.post('/register', authPolices.register, authcontrolles.register)
    app.post('/login', authcontrolles.login)

    app.get('/details/:sort', dataControlls.show)
}