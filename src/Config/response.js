require('colors')
const response = {

  sucess: (req, res, message, code) => {
    if (!code) code = 200
    if(!message) message = 'Operacion exitosa!!!'
    res.status(code).send({
      success: true,
      error: '',
      body: message
    })
  },

  error: (req, res, message, code, detail) => {
    console.error(`[error]: ${detail}`.bgRed.white)

    res.status(code).send({
      success: false,
      error: message,
      body: ''
    })
  }
}

module.exports = response
