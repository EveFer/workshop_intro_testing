// require('module-alias/register')
require('module-alias-jest/register')
const db = require('@libs/db')
const server = require('@src/server')

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

async function main () {
  await db.connect()
  console.log('DB connected successfully')
  const PORT = process.env.PORT || 4000
  server.listen(PORT, () => {
    console.log('Server listening on port: ', PORT)
  })
}

main()
  .then(() => console.log('All Ready'))
  .catch(err => console.log('Error: ', err))
