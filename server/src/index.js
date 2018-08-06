// requirements
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const crypto = require('crypto')
const multer = require('multer')
const path = require('path')

// connenting to database
mongoose.connect('mongodb://localhost/zefaf')
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

// connecting to server
const app = express()

// middleware
app.use(morgan('dev'))
app.use(bodyparser.json())
app.use(cors())

// Public Folder
app.use(express.static('../public'))

// routers
require('./router/routes')(app)

// listen to port
app.listen(process.env.PORT || 5000, () => {
  console.log('we are connecting to port 5000')
})
