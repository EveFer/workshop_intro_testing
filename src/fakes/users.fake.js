const { faker } = require('@faker-js/faker')

function randomRole () {
  const roles = ['user', 'admin', 'superadmin']
  const numRole = Math.floor(Math.random() * roles.length)
  return roles[numRole]
}

function createObjectIds (nums) {
  return Array.from({ length: nums }, faker.database.mongodbObjectId)
}

function generateOneUser () {
  return {
    _id: faker.database.mongodbObjectId(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    role: randomRole(),
    company: faker.database.mongodbObjectId(),
    projects: createObjectIds(2),
    createdAt: faker.datatype.datetime().toJSON(),
    updatedAt: faker.datatype.datetime().toJSON()
  }
}

function generateManyUsers (size) {
  const limit = size ?? 10
  return Array.from({ length: limit }, generateOneUser)
}

// console.log(generateOneUser())
// console.log(generateManyUsers(3))

module.exports = {
  generateOneUser,
  generateManyUsers
}
