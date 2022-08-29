const router = require('express').Router()
const controller = require('./Hotel.controller.js')


  router.post('/', controller.createHotel)
  router.get('/', controller.getHoteles)
  router.get('/ciudad', controller.getNumberHotels)
  router.get('/type', controller.getNumberType)
  router.get('/:idHotel', controller.getHotel)
  router.patch('/:idHotel', controller.updateHotel)


module.exports = router
