const clienteDto = require('./Cliente.dto.js')
const authController = require('../Auth/Auth.controller.js')
const response = require('../../Config/response.js')
const sendMail = require('../../services/sendEmail.js')

module.exports = {


  createCliente: async (req, res, next) => {
    const data = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      edad: req.body.edad,
      telefono: req.body.telefono,
      email: req.body.email,
      pais: req.body.pais,
      genero: req.body.genero,
    }

    const newCliente = await clienteDto.createCliente(data)
    if (newCliente?.message) return next(newCliente)

    const userData = {
      user: newCliente._id,
      email: req.body.email,
      password: req.body.password,
      rol: req.body.rol
    }

    const newUser = await authController.createUser(userData)
    if (newUser?.message) return next(newUser)

    const info = {
      to: `${req.body.email}`,
      subject: 'Registro Exitoso!! :)',
      html: `<p>Bienvenido!!! Ahora eres parte de la familia de <strong>Booking App</strong></p>`
    }

    sendMail(info)

    response.sucess(req, res, {info: 'Registro exitoso', newCliente},201 )


  },

  getClientes: async (req, res, next) => {
    const clientes = await clienteDto.getClientes()
    if (clientes?.message) return next(clientes)

    response.sucess(req, res, {info: 'Operacion exitosa', clientes}, 200)
  },

  getCliente: async (req, res, next) => {
    const idCliente = req.params.idCliente

    const user = await clienteDto.getCliente(idCliente)
    if (user?.message) return next(user)

    response.sucess(req, res, {info: 'Operacion Exitosa', user}, 200)
  },

  updateCliente: async (req, res, next) => {
    const idCliente = req.params.idCliente
    const data = req.body

    const clienteUpdate = await clienteDto.updateCliente(idCliente, data)
    if (clienteUpdate?.message) return next(clienteUpdate)

    response.sucess(req, res, {info: 'Operacion Exitosa', clienteUpdate}, 201)

  }
}
