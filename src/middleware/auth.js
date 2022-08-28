const response = require('../Config/response.js')
const helperAuth = require('../Helpers/Auth.helpers.js')



  const checkToken = (req, res, next) => {

    const token = req.cookies.access_token
    if (!token) return response.error(req, res, { info: 'No te puedes autenticar' }, 401, 'No hay token')

    const match = helperAuth.decoderJwt(token)
    if (!match) return response.error(req, res, { info: 'No te puedes autenticar' }, 403, 'Token invalido')

    req.user = match

    next()
  }

  const checkUser = (req, res, next) => {
    checkToken(req, res, next), () => {
      if (req.user.id === req.params.idCliente || req.rol === 'admin') {
        next()
      } else {
        response.error(req, res, { info: 'No te puedes autenticar' }, 403, 'El usuario no es valido o no tiene los permisos')
      }
    }
  }

module.exports = {
  checkToken,
  checkUser
  }
