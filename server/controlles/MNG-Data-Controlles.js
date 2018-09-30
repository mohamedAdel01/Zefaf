const MNGServicesItems = require('../models/MNG-Services-Items')

module.exports = {
    async getServicesItems(req,res) {
        var response = await MNGServicesItems.find()
        res.status(200).send(response)
    },

    async addMember(req, res) {
        let member = require(`../models/${req.params.model}`)

        var response = await member.create(req.body)
        res.send(response)
    }
}
