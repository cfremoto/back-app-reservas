const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {

  hashPass:  async  (password) => {
    return await bcrypt.hash(password, 10)
  },

  checkPass: async (password, hashPassword) => {
    return await bcrypt.compare(password, hashPassword)
  },

  generateJwt: (info) => {
    return jwt.sign(info, process.env.JWT_SECRET, {expiresIn: '1h'})
  },

  decoderJwt: (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
  }

}
