const mongoose = require('mongoose')
const schema = mongoose.Schema

const FlowersMemberSchema = new schema({
    info: {
        name: String,
        governorate: String,
        city: String,
        address: String
    },
    services: {
        Bouquet: [
            {
                details: String,
                price: Number,
                imgID: String
            }
        ]
    },
    dates: Array
})

const FlowersMember = mongoose.model('flowersmember', FlowersMemberSchema)

module.exports = FlowersMember
