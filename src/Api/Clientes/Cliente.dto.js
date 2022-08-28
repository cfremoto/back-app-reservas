const modelCliente = require('./Cliente.model.js')

module.exports = {

  createCliente: async (data) => {
    try {
      const newCliente = new modelCliente(data)
      return await newCliente.save()
    } catch (err) {
      return err
    }
  },

  getClientes: async () => {
    try {
      return await modelCliente.find()
    } catch (err) {
      return err
    }
  },

  getCliente: async (idCliente) => {
    try {
      return await modelCliente.findById(idCliente)
    } catch (err) {
      return err
    }
  },

  updateCliente: async (idCliente, data) => {
    try {
      return await modelCliente.findByIdAndUpdate(idCliente, data, {new: true})
    } catch (err) {
      return err
    }
  }
}
