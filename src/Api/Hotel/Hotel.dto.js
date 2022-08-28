const hotelModel = require('./Hotel.model.js')

module.exports = {

  createHotel: async (data) => {
    const newHotel = new hotelModel(data)
    try {
      return await newHotel.save()
    } catch (err) {
      return err
    }
  },

  getHoteles: async () => {
    try {
      return await hotelModel.find()
    } catch (err) {
      return err
    }
  },

  getHotel: async (idHotel) => {
    try {
      return await hotelModel.findById(idHotel)
    } catch (err) {
      return err
    }
  },

  updateHotel: async (idHotel, data ) => {
    try {
      return await hotelModel.findByIdAndUpdate({_id:idHotel}, data, {new: true})
    } catch (err) {
      return err
    }
  },

  updateHotelHab: async (idHotel, data) => {
    try {
      const hotelUpdate = await hotelModel.findByIdAndUpdate({ _id: idHotel }, { $push: { habitaciones: data } })
      return hotelUpdate
    } catch (err) {
      return err
    }
  }
}
