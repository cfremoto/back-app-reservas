const router = require('express').Router()
const controller = require('./Habitacion.controller.js')


  router.post('/', controller.createHabitacion)
  router.get('/', controller.getHabitaciones)
  router.get('/:idHab', controller.getHabitacion)
  router.patch('/:idHab', controller.updateHabitacion)




module.exports = router
