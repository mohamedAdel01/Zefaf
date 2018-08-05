// requirements
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const methodOverride = require('method-override')


// connecting to server
const app = express()

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use(cors())

// routers
require('./router/routes')(app)

// listen to port
app.listen(process.env.PORT || 5000, () => {
  console.log('we are connecting to port 5000')
})

