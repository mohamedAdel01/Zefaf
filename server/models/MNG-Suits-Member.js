const mongoose = require('mongoose')
const schema = mongoose.Schema

const suitMemberSchema = new schema({
    info: {
        name: String,
        governorate: String,
        city: String,
        address: String
    },
    services: {
        Suits: [
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

const suitMember = mongoose.model('suitMember', suitMemberSchema)

module.exports = suitMember
