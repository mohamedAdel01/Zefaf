// requirements
const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const CONFIG = require('./config')
const routes = require('./router/routes')

// get MONGODATA here to run
require('./config/mongoDB')

// connecting to server
const app = express()

// middleware
app.use(morgan('dev'))
app.use(bodyparser.json())
app.use(cors())

// Public Folder
app.use(express.static('../public'))

// routers
app.use('/api', routes)

// listen to port
app.listen(CONFIG.PORT, () => {
  console.log('we are connecting to port 5000')
})
