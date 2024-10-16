const { Router } = require('express')
const personaRoutes = require('./persona.routes')
const autorRoutes = require('./autor.routes')

const router = Router()

router.use('/personas', personaRoutes)
router.use('/autor', autorRoutes)

module.exports = router