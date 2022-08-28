const mongoose = require('mongoose')
require('colors')

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
    useUnifiedTopology: true
    })
    console.log(`DB connected successfully on ${mongoose.connection.host} 😁`.bgGreen.bold)
  } catch (err) {
    console.log(`[error]: ${err.message}`.bgRed.inverse)
  }

  mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected'.bgRed.white.bold)
  })
}

module.exports = db
