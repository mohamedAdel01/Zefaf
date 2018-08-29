const mongoose = require('mongoose')
const schema = mongoose.Schema

const PhotographersMemberSchema = new schema({
    info: {
        name: String,
        governorate: String,
        city: String,
        address: String,
        ImgsName: Array
    },
    services: {
        photoSession: [
            {
                details: String,
                price: Number,
                imgID: String
            }
        ],
        weddingOffers: [
            {
                details: String,
                price: Number,
                imgID: String
            }
        ],
        
    },
    dates: Array
})

const PhotographersMember = mongoose.model('photographersmember', PhotographersMemberSchema)

module.exports = PhotographersMember
