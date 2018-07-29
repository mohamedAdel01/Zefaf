// this to controll with data from FRONT-END

var bcrypt = require('bcrypt')
const saltRounds = 10
const User = require('../models/user')

module.exports = {
    register(req, res) {
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            req.body.password = hash
            User.create(req.body).then((user) => {
                res.send(req.header) // status 201 
            })
          });
    }
}