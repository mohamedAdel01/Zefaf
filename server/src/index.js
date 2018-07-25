// requirements
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')

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

// connecting to server
const app = express()

// middleware
app.use(morgan('dev'))
app.use(bodyparser.json())
app.use(cors())

// routers
require('./router/routes')(app)

// listen to port
app.listen(process.env.PORT || 5000, () => {
  console.log('we are connecting to port 5000')
})
