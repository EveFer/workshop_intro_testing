const express = require('express')
const { users } = require('@src/useCases')
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const userCreated = await users.create(req.body)
    res.json({
      success: true,
      data: {
        user: userCreated
      }
    })
  } catch (error) {
    res.status(400)
  }
})

module.exports = router
