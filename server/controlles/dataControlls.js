// this page may be delete after
const weddingData = require('../models/weddingData')

module.exports = {
    async show(req,res) {
        var response = await weddingData.find({sort: req.params.sort})
        res.status(200).send(response)
    }
}