const { users } = require('@src/useCases')
const User = require('@src/models/users.model')

const mockingoose = require('mockingoose')
const { generateOneUser } = require('../fakes/users.fake')
// mocking -> reemplazar

describe('Test for user module', () => {
  beforeEach(() => {
    mockingoose.resetAll()
  })
  describe('Create a new User', () => {
    test('Should return a object when creating a new User', async () => {
      // mock
      const userMock = generateOneUser()
      mockingoose(User).toReturn(userMock, 'create')
      // ejecución de método - create
      const userCreated = await users.create(userMock)
      const user = JSON.parse(JSON.stringify(userCreated))
      console.log(user)
      // assert
      expect(user).toHaveProperty('email')
      expect(user).not.toHaveProperty('password')
      expect(user).not.toBeNull()
    })
  })

  describe('Get all users', () => {
    test('Should return a array of users', () => {

    })
  })

  describe('Get user by id', () => {
    test('Shoulf return a user object', () => {

    })
  })
})
