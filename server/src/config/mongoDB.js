const mongoose = require('mongoose')
const crypto = require('crypto')
const multer = require('multer')
const path = require('path')
const CONFIG = require('./index')

// connenting to database
mongoose.connect(CONFIG.MONGO_DB.URI + CONFIG.MONGO_DB.DB)
mongoose.Promise = global.Promise
mongoose.connection.once('open', function(err) {
  if (err) {
    console.log('error found', err)
  } else {
    console.log('we are connected to database.')
  }
})

// Creating storage for files and images
var storage = multer.diskStorage({
  destination: '../public/uploads/',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + path.extname(file.originalname))
    })
  }
})

module.exports.upload = multer({ storage: storage }).single('file')
