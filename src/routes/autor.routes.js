const { Router } = require('express')
const autorControllers = require('../controllers/autor.controllers')

const routes = Router()

routes.get('/', autorControllers.consulta)

module.exports = routes