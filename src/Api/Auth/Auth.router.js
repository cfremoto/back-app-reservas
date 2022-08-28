const router = require('express').Router()
const controller = require('./Auth.controller.js')


  router.post('/register', controller.createUser)
  router.post('/login', controller.login)
  router.patch('/', controller.updatePass)


module.exports = router
