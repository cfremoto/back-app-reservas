const modelHabitacion = require('./Habitacion.model.js')

module.exports = {

  createHabitacion: async (data) => {
    try {
      const newHab = new modelHabitacion(data)
      return await newHab.save()
    } catch (err) {
      return err
    }
  },

  getHabitaciones: async () => {
    try {
      return await modelHabitacion.find()
    } catch (err) {
      return err
    }
  },

  getHabitacion: async (idHab) => {
    try {
      return await modelHabitacion.findById(idHab)
    } catch (err) {
      return err
    }
  },

  updateHabitacion: async (idHab, data) => {
    try {
      return await modelHabitacion.findByIdAndUpdate({_id: idHab}, data, {new: true})
    } catch (err) {
      return err
    }
  }


}
