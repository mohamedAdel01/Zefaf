const mongoose = require('mongoose')
const schema = mongoose.Schema

const itemSchema = new schema({
    route: String,
    name: String
})

const ServicesItemsSchema = new schema({
    itmes: [itemSchema]
})

const ServicesItems = mongoose.model('servicesItem', ServicesItemsSchema)

module.exports = ServicesItems