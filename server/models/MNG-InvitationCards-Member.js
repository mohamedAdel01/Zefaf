const mongoose = require('mongoose')
const schema = mongoose.Schema

const InvitaionCardsMemberSchema = new schema({
    info: {
        name: String,
        governorate: String,
        city: String,
        address: String
    },
    services: {
        InvitaionCards: [
            {
                name: String,
                price: Number,
                imgID: String
            }
        ]
    },
    dates: Array
})

const InvitaionCardsMember = mongoose.model('invitaioncardsmember', InvitaionCardsMemberSchema)

module.exports = InvitaionCardsMember
