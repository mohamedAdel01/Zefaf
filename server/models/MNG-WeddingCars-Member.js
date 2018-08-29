const mongoose = require('mongoose')
const schema = mongoose.Schema

const weddingCarsMemberSchema = new schema({
    info: {
        name: String,
        governorate: String,
        city: String,
        address: String
    },
    services: {
        cars: [
            {
                name: String,
                price: Number,
                imgID: String
            }
        ]
    },
    dates: Array
})

const weddingCarsMember = mongoose.model('weddingcarsmember', weddingCarsMemberSchema)

module.exports = weddingCarsMember