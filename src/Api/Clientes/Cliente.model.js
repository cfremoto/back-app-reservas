const { model, Schema } = require('mongoose')

const clienteSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: String, required: true },
  telefono: { type: String, required: true },
  email: { type: String, required: true },
  pais: { type: String, required: true },
  genero: { type: String, required: true },
}, {versionKey: false, timestamps: true})

module.exports = model('Cliente', clienteSchema)
