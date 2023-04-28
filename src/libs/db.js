const mongoose = require('mongoose')

function connect () {
  return mongoose.connect(process.env.URL_MONGO)
}

module.exports = { connect }
