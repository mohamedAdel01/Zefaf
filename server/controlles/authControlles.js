// this to controll with data from FRONT-END

var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
const saltRounds = 10
const User = require('../models/user')

module.exports = {
    async register(req, res) {
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {

            if(err) {
                res.status(500).send({msg: 'error in server try in later time '})
                return
            }

            req.body.password = hash

            User.create(req.body).then((user) => {
                jwt.sign({user}, "mohamedsecret", {expiresIn: "7d"}, (err, token) => {

                    if(err) {
                        // error in server we should tell him to try in later time 
                        res.status(500).send({msg: 'error in server try in later time '})

                    } else {
                        res.status(201).send({
                            token: token,
                            user: user.toJSON()
                        })
                    }
                })
            })
        })
    },

    async login(req, res) {
        var user = await User.findOne({email: req.body.email})

        // EMAIL CHECK
        if(!user) {
            return res.status(403).send({
                msg: "the email is incorrect"
            })
        }

        // PASSWORD CHECK
        var checkPassword = await bcrypt.compare(req.body.password, user.password)

        if(!checkPassword) {
            return res.status(403).send({
                msg: "password is incorrect"
            })
        }

        // SEND TOKEN
        jwt.sign({user}, "mohamedsecret", {expiresIn: "7d"}, (err, token) => {

            if(err) {
                // error in server we should tell him to try in later time 
                res.status(500).send({msg: 'error in server try in later time '})

            } else {
                res.status(201).send({
                    token: token,
                    user: user.toJSON()
                })
            }
        })
    }
}