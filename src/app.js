//imports
const express = require('express')
const cors = require('cors')
const cookie = require('cookie-parser')
const swaggerUi = require('swagger-ui-express')
const routerApi = require('./routes/')
const errors = require('./middleware/errorHandle.js')

//instancia de express
const app = express()

//documentacion
const swaggerDoc = require('../src/doc/swagger.json')

//middleware
app.use(express.json({limit: '50Mb'}))
app.use(express.urlencoded({ limit: '50Mb', extended: true }))
app.use(cors())
app.use(cookie())

//routes
routerApi(app)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

//errors
app.use(errors)


//export app
module.exports = app
