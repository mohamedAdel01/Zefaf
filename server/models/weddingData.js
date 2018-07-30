const mongoose = require('mongoose')
const schema = mongoose.Schema

const weddingDataSchema = new schema({
    sort: String,
    header: String,
    mainInfo: String,
    subData: [ 
        {
            header : String,
            subInfo : String
        }
    ],
    userInfo: {
        phone: String,
        email: String
    }
 
})

const weddingdata = mongoose.model('weddingdata', weddingDataSchema)

module.exports = weddingdata