const express = require('express')
const UserController = require('./controller/UserController')

const routes = express.Router()

routes.get('/users', UserController.index)
routes.get('/user/:id', UserController.findById)
routes.post('/users', UserController.store)
routes.delete('/user/:id', UserController.delete)
routes.put('/users', UserController.update)

module.exports = routes
