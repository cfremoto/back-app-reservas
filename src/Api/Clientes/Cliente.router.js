const router = require('express').Router()
const controller = require('./Cliente.controller.js')
const auth = require('../../middleware/auth.js')


  router.post('/', controller.createCliente)
  router.get('/', auth.checkToken, controller.getClientes)
  router.get('/:idCliente', auth.checkUser, controller.getCliente)
  router.patch('/:idCliente', controller.updateCliente)




module.exports = router
