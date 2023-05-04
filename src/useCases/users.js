const User = require('@src/models/users.model')
const bcrypt = require('bcrypt')

async function create (dataUser) {
  const { email, password } = dataUser

  const userFound = await User.findOne({ email })

  if (userFound) throw new Error('Ya existe un usuario con este correo')

  const hash = await bcrypt.hash(password, 10)

  const userCreated = await User.create({
    ...dataUser,
    password: hash
  })
  //
  return userCreated
}

function getAll () {
  return User.find({}) // return  []
}

function getById (id) {
  return User.findById(id) // {} , undefined
}

module.exports = {
  create,
  getAll,
  getById
}
