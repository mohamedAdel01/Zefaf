const User = require('../../models/user')

module.exports = (app) => {
    app.post('/register', (req,res) => {
        const user = User.create(req.body)  
    })
}