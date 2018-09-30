const WeddingHalls = require('../models/MNG-WeddingHalls-Member')

module.exports = {
    async getWeddingHalls(req,res) {
        var response = await WeddingHalls.find({"info.governorate": req.params.governorate})
        res.send(response)
    }
}
