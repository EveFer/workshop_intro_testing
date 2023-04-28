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
  delete userCreated.password
  return userCreated
}

function getAll () {
  return User.find({})
}

function getById (id) {
  return User.findById(id)
}

module.exports = {
  create,
  getAll,
  getById
}
