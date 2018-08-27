const crypto = require('crypto')
const multer = require('multer')
const path = require('path')

module.exports = {
    async SaveImgs(req, res) {
        var storage = multer.diskStorage({
            destination: `../public/uploads/${req.params.folder}/${req.params.sub}/`,
            filename: function (req, file, cb) {
              crypto.pseudoRandomBytes(16, function (err, raw) {
                cb(null, raw.toString('hex') + Date.now() + path.extname(file.originalname))
              })
            }
          })  
       var upload = multer({ storage: storage }).any('file', 10)
    
        upload(req, res, (err) => {
          if (err) {
            console.log(err)
            return
          }
          res.send(req.files)
        })
    }

}
