const jwt = require('jsonwebtoken')
const Joi = require('joi')

module.exports = {
    async register(req,res,next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/)
        }

        const {error,value} = Joi.validate(req.body, schema)
        // res.send(error)
        if(error) {
            switch (error.details[0].context.key) {
                case 'email' :
                res.status(400).send('email')
                break

                case 'password' :
                res.status(400).send('password')
                break

                default:
                res.status(400).send('default')
            }
        } else {
            next()
        }
    },
    
    async isAuthenticated(req,res,next) {
        var Token = await req.headers['authorization']
        jwt.verify(Token, 'mohamedsecret', (err, decoded) => {
            if (err) {
                res.send('forbiden')
            }
        })
        next()
    }
}
