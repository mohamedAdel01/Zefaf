const mongoose = require('mongoose')
const schema = mongoose.Schema

const testSchema = new schema({
    type: String,
    data: Buffer
})

const testschema = mongoose.model('testschema', testSchema)

module.exports = testschema