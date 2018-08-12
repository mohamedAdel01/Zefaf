const MNGServicesItems = require('../models/MNG-Services-Items')

module.exports = {
    async getServicesItems(req,res) {
        MNGServicesItems.find().then((items) => {
            res.send(items)
        })
    }
}