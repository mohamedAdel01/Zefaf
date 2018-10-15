const mongoose = require('mongoose')
const schema = mongoose.Schema

const weddingHallsMemberSchema = new schema({
    info: {
        name: String,
        email: String,
        governorate: String,
        city: String,
        address: String,
        NOPeople: Number,
        hourPrice: Number,
        priceRent: Number,
        detail: String,
        ImgsName: Array
    },
    services: {
        singer: [
            {
                name: String,
                price: Number,
                imgID: String,
                Q: {type: Number, default: 0}
            }
        ],
        Dj: [
            {
                name: String,
                price: Number,
                imgID: String,
                Q: {type: Number, default: 0}
            }
        ],
        flint: [
            {
                name: String,
                price: Number,
                imgID: String,
                Q: {type: String, default: 1}
            }
        ],
        videoTeam: [
            {
                name: String,
                price: Number,
                imgID: String,
                Q: {type: Number, default: 0}
            }
        ],
        chairs: [
            {
                name: String,
                price: Number,
                imgID: String,
                Q: {type: Number, default: 0}
            }
        ],
        tables: [
            {
                name: String,
                price: Number,
                imgID: String,
                Q: {type: Number, default: 0}
            }
        ],
        shows: [
            {
                name: String,
                price: Number,
                imgID: String,
                Q: {type: Number, default: 0}
            }
        ],
        drinks: [
            {
                name: String,
                price: Number,
                imgID: String,
                Q: {type: Number, default: 0}
            }
        ],
        buffet: [
            {
                name: String,
                price: Number,
                imgID: String,
                Q: {type: Number, default: 0}
            }
        ],
        setMenu: [
            {
                name: String,
                price: Number,
                imgID: String,
                Q: {type: Number, default: 0}
            }
        ]
    },
    dates: Array
})

const weddingHallsMember = mongoose.model('weddinghallsmember', weddingHallsMemberSchema)

module.exports = weddingHallsMember
