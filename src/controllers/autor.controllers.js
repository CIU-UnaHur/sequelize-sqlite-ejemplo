const { Autor, Libro } = require('../models')
const { Op } = require('sequelize')
const { link } = require('../routes')

autorControllers = {}
const consulta = async (req, res) => {
    const autorFiltrados = await Autor.findAll({
        include: {
            model: Libro,
            attributes: ['titulo', 'fechaPublicacion'],
            through: { attributes: [] }
        },
        attributes: ['nombre', 'nacionalidad']
    })
    res.json(autorFiltrados)
}
autorControllers.consulta = consulta

module.exports = autorControllers
