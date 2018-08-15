const MNGServicesItems = require('../models/MNG-Services-Items')

module.exports = {
    async getServicesItems(req,res) {
        var response = await MNGServicesItems.find()
        res.status(200).send(response)
    }
}