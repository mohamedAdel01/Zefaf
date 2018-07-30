const authPolices = require('../../policies/authPolicies')
const authcontrolles = require('../../controlles/authcontrolles')

module.exports = (app) => {
    app.post('/register', authPolices.register, authcontrolles.register)
    app.post('/login', authcontrolles.login)
}