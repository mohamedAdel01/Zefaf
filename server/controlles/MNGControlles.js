var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
const saltRounds = 10
const MNGUser = require('../models/MNGUser')

module.exports = {
    async MNGAddUser(req, res) {
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {

            if(err) {
                res.status(500).send({msg: 'error in server try in later time '})
                return
            }

            req.body.password = hash

            MNGUser.create(req.body).then((user) => {
                jwt.sign({user}, "mohamedsecret", {expiresIn: "1d"}, (err, token) => {

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

    async MNGLogin(req, res) {
        var user = await MNGUser.findOne({email: req.body.email})

        // EMAIL CHECK
        if(!user) {
            return res.status(403).send({
                msg: "the email is not found"
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
        jwt.sign({user}, "mohamedsecret", {expiresIn: "1d"}, (err, token) => {

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