const mongoose = require('mongoose')
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
