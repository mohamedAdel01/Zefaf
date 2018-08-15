const mongoose = require('mongoose')
const schema = mongoose.Schema

const ServicesItemsSchema = new schema({
    route: String,
    name: String
})

const ServicesItems = mongoose.model('servicesitems', ServicesItemsSchema)

module.exports = ServicesItems