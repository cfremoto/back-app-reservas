const hotelDto = require('./Hotel.dto.js')
const response = require('../../Config/response.js')


module.exports = {

  createHotel: async (req, res, next) => {
    const data = {
      nombre: req.body.nombre,
      type: req.body.type,
      ciudad: req.body.ciudad,
      direccion: req.body.direccion,
      distancia: req.body.distancia,
      fotos: req.body.fotos,
      descripcion: req.body.descripcion,
      rating: req.body.rating,
      habitaciones:  req.body.habitaciones,
      precio_barato: req.body.precio_barato,
      destacado: req.body.destacado
    }

    const newHotel = await hotelDto.createHotel(data)
    if (newHotel?.message) return next(newHotel)

    response.sucess(req, res, {info: 'Operacion exitosa', newHotel}, 201)
  },

  getHoteles: async (req, res, next) => {

    const hoteles = await hotelDto.getHoteles()
    if (hoteles?.message) return next(hoteles)

    response.sucess(req, res, {info: 'Operacion exitosa', hoteles}, 200)
  },

  getHotel: async (req, res, next) => {
    const idHotel = req.params.idHotel

    const hotel = await hotelDto.getHotel(idHotel)
    if (hotel?.message) return next(hotel)

    response.sucess(req, res, {info: 'Operacion exitosa', hotel}, 200)
  },

  updateHotel: async (req, res, next) => {
    const data = req.body
    const idHotel = req.params.idHotel

    const updateHotel = await hotelDto.updateHotel(idHotel, data)
    if (updateHotel?.message) return next(updateHotel)

    response.sucess(req, res, {info: 'Operacion exitosa', updateHotel}, 200)
  }
}
