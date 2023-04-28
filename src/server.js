const express = require('express')
const userRouter = require('@src/routers/users.router.js')

const app = express()

app.use(express.json({ limit: '50mb' }))

app.get('/', (request, response) => {
  response.json({
    description: 'Api - Test',
    version: '1.0.0',
    developed: [
      {
        name: 'Toroto Tech'
      }
    ]
  })
})

app.use('/users', userRouter)

module.exports = app
