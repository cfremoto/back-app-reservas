const { model, Schema } = require('mongoose')

const hotelSchema = new Schema({
  nombre: { type: String, required: true },
  type: { type: String, required: true },
  ciudad: { type: String, required: true },
  direccion: { type: String, required: true },
  distancia: { type: String, required: true },
  fotos: [{type: String}],
  descripcion: { type: String, required: true },
  rating: {type: Number, min: 0, max: 5},
  habitaciones:  {type: String, required: true },
  precio_barato: {type: Number, required: true },
  destacado: { type: Boolean, required: true }
}, {versionKey: false, timestamps: true})

module.exports = model('Hotel', hotelSchema)
