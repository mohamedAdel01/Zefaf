const mongoose = require('mongoose')
const schema = mongoose.Schema

const dressMemberSchema = new schema({
    info: {
        name: String,
        governorate: String,
        city: String,
        address: String
    },
    services: {
        Dress: [
            {
                imgID: String,
                colors: Array,
                details: String,
                pieces: Array,
                size: String,
                price: Number,
            }
        ]
    }
})

const dressMember = mongoose.model('dressMember', dressMemberSchema)

module.exports = dressMember
