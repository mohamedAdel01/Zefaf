const authPolices = require('../../policies/authPolicies')

module.exports = (app) => {
    app.post('/register', authPolices.register)
}