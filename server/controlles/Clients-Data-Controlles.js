const MNGServicesItems = require('../models/MNG-Services-Items')

module.exports = {
    async getData(req, res) {
        let item = require(`../models/MNG-${req.body.dbName}-Member`)
        let response = await item.find({"info.email": req.body.email})
        res.send(response)

    }
}
