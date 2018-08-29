const mongoose = require('mongoose')
const schema = mongoose.Schema

const weddingHallsMemberSchema = new schema({
    info: {
        name: String,
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
        songer: [
            {
                name: String,
                price: Number,
                imgID: String
            }
        ],
        Dj: [
            {
                name: String,
                price: Number,
                imgID: String
            }
        ],
        flint: [
            {
                name: String,
                price: Number,
                imgID: String
            }
        ],
        videoTeam: [
            {
                name: String,
                price: Number,
                imgID: String
            }
        ],
        chairs: [
            {
                name: String,
                price: Number,
                imgID: String
            }
        ],
        tables: [
            {
                name: String,
                price: Number,
                imgID: String
            }
        ],
        shows: [
            {
                name: String,
                price: Number,
                imgID: String
            }
        ],
        drinks: [
            {
                name: String,
                price: Number,
                imgID: String
            }
        ],
        buffet: [
            {
                name: String,
                price: Number,
                imgID: String
            }
        ],
        setMenu: [
            {
                name: String,
                price: Number,
                imgID: String
            }
        ]
    },
    dates: Array
})

const weddingHallsMember = mongoose.model('weddinghallsmember', weddingHallsMemberSchema)

module.exports = weddingHallsMember
