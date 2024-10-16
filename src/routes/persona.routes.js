const { Router } = require('express')
const personaController = require('../controllers/persona.controllers')

const routes = Router()

routes.get('/', personaController.getPersonas)
routes.post('/', personaController.addPersona)

module.exports = routes