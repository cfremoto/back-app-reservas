const authDto = require('./Auth.dto.js')
const authHelper = require('../../Helpers/Auth.helpers.js')
const response = require('../../Config/response.js')

module.exports = {

  createUser: async (data) => {
    const passwordHash = await authHelper.hashPass(data.password)

    const userAuth = {
      user: data.user,
      email: data.email,
      password: passwordHash,
      rol: data.rol
    }

    const user = await authDto.createUser(userAuth)

    return user
  },

  login: async (req, res, next) => {
    const { email, password } = req.body

    const userAuth = await authDto.getUser(email)
    if (userAuth?.message) return response.error(req, res, 'Datos Invalidos', 400, userAuth)

    const match = await authHelper.checkPass(password, userAuth.password)
    if (!match) return response.error(req, res, 'Datos Invalidos', 400, userAuth)

    const token = authHelper.generateJwt({ id: userAuth.user, rol: userAuth.rol })

    res.cookie('access_token', token, {httpOnly: true}).status(200).send({info: 'Operacion Exitosa'})

  },

  updatePass: async (req, res, next) => {
    const passwordHash = await authHelper.hashPass(req.body.password)

    const user = await authDto.getUser(req.body.email)

    const userPassUpdate = await authDto.updatePass(user._id, passwordHash)
    if (userPassUpdate?.message) return next(userPassUpdate)

    response.sucess(req, res, {info: 'Operacion Exitosa'}, 201)
  }
}
