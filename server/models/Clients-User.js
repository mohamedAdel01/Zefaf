const mongoose = require('mongoose')
const schema = mongoose.Schema

const ClientsUserSchema = new schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const ClientsUser = mongoose.model('ClientsUser', ClientsUserSchema)

module.exports = ClientsUser
