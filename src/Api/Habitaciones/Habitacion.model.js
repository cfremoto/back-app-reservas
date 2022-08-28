const { model, Schema } = require('mongoose')

const habitacionSchema = new Schema({
  titulo: { type: String, required: true },
  precio: { type: Number, required: true },
  maxPersonas: { type: Number, required: true },
  descripcion: { type: String, required: true },
  numeroCuarto: [{number: Number, fechasNoDisponibles: [{type: Date}]}]

}, { versionKey: false, timestamps: true })

module.exports = model('Habitacion', habitacionSchema)
