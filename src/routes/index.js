const Hotel = require('../Api/Hotel/Hotel.router.js')
const Cliente = require('../Api/Clientes/Cliente.router.js')
const Auth = require('../Api/Auth/Auth.router.js')


const routerApi = (app) => {
  app.use('/api/v1/hoteles', Hotel)
  app.use('/api/v1/clientes', Cliente)
  app.use('/api/v1/auth', Auth)


}

module.exports = routerApi
