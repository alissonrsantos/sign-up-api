require('./database')

const express = require('express')
const routes = require('./routes')

const cookieParser = require('cookie-parser') // Faz transferência de dados
const cors = require('cors') // Permite passagem de dados para domínios

const app = express()

app.use(cors())

app.use(cookieParser())

app.use(express.json())

app.use(routes)

app.listen(3333, () => {
  console.log('Server is running on port 3333.')
})
