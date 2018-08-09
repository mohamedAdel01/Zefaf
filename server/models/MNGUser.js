const mongoose = require('mongoose')
const schema = mongoose.Schema

const MNGuserSchema = new schema({
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

const MNGUser = mongoose.model('MNGUser', MNGuserSchema)

module.exports = MNGUser