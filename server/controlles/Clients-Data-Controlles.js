module.exports = {
    async getData(req, res) {
        let item = require(`../models/MNG-${req.body.dbName}-Member`)
        let response = await item.find({"info.email": req.body.email})
        res.send(response)

    },

    async updateData(req, res) {
        let item = require(`../models/MNG-${req.body.dbName}-Member`)
        await item.findOneAndUpdate({"_id": req.body.dbID}, req.body.Data)
        let response = await item.find({"info.email": req.body.email})
        res.send(response)
    }
}
