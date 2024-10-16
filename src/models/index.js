const Persona = require('./Persona')
const Pasaporte = require('./Pasaporte')
const Autor = require('./Autor')
const Libro = require('./Libro')

Persona.hasOne(Pasaporte)
Pasaporte.belongsTo(Persona)

Autor.belongsToMany(Libro, { through: 'AutorLibro' })
Libro.belongsToMany(Autor, { through: 'AutorLibro' })

module.exports = {
    Persona,
    Pasaporte,
    Autor,
    Libro
}