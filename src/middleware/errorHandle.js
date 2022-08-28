require('colors')
const response = require('../Config/response.js')

const errors = (err, req, res, next) => {

  console.error(`[error]: ${err.message} \n En el path: ${err.path}`.bgRed.white.bold)

  const message = err.message || 'Error Interno'
  const status = err.statusCode || 500
  const path = err.path || ''
  const errors = err.errors || ''

  response.error(req, res, message, status, err)

}

module.exports = errors
