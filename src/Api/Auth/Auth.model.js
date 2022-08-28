const { model, Schema } = require('mongoose')

const authSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'Cliente' },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  rol: { type: String, default: 'cliente' },

}, {versionKey: false, timestamps: true})

module.exports = model('Auth', authSchema)
