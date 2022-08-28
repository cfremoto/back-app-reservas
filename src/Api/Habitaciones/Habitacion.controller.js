const habDto = require('./Habitacion.controller.js')
const hotelDto = require('../Hotel/Hotel.dto.js')
const response = require('../../Config/response.js')

module.exports = {

  createHabitacion: async (req, res, next) => {

    const hotelId = req.params.idHotel

    const data = {
      titulo: req.body.titulo,
      precio: req.body.precio,
      maxPersonas: req.body.maxPersonas,
      descripcion: req.body.descripcion,
      numeroCuarto: req.body.numeroCuarto
    }

    const newHab = await habDto.createHabitacion(data)
    if (newHab?.message) return next(newHab)

    const hotelUpdate = await hotelDto.updateHotelHab(hotelId, newHab._id)
    if (newHab?.message) return next(newHab)

    response.sucess(req, res, {info: 'Operacion exitosa', newHab}, 201)
  },

  getHabitaciones: async (req, res, next) => {

    const habitaciones = await habDto.getHabitaciones()
    if (habitaciones.message) return next(habitaciones)

    response.sucess(req, res, {info: 'Operacion exitosa', habitaciones}, 200)
  },

  getHabitacion: async (req, res, next) => {

    const idHab = req.params.idHab

    const habitacion = await habDto.getHabitacion(idHab)
    if (habitacion.message) return next(habitacion)

    response.sucess(req, res, {info: 'Operacion exitosa', habitacion}, 200)
  },

  updateHabitacion: async (req, res, next) => {
    const idHab = req.params.idHab
    const data = req.body

    const updateHab = await habDto.updateHabitacion(idHab, data)
    if (updateHab.message) return next(updateHab)

    response.sucess(req, res, { info:'Operacion exitosa', updateHab}, 201)
  }



}
