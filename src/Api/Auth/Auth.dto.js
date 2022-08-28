const authModel = require('./Auth.model.js')

module.exports = {

  createUser: async (data) => {
    try {
      const user = new authModel(data)
      return await user.save()
    } catch (err) {
      return err
    }
  },

  getUser: async (data) => {
    try {
      return await authModel.findOne({email: data})
    } catch (err) {
      return err
    }
  },

  updatePass: async (idUser, passwordHash) => {
    try {
      return await authModel.findByIdAndUpdate(idUser, {$set: {password: passwordHash}})
    } catch (err) {
      return err
    }
  }
}
