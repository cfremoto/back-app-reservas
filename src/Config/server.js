require('dotenv').config()
const app = require('../app.js')
const db = require('./db.js')
require('colors')

const PORT = process.env.PORT || 5000

const server = async () => {
  await app.listen(PORT, () => {
    db()
    console.log(`Server is READY 🥳 on ${PORT}`.bgCyan.red.bold)
  })
}

server()
