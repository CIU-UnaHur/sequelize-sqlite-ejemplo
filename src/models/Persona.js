const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

class Persona extends Model {}

Persona.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
}, {
    sequelize,
    modelName: 'persona'
})

module.exports = Persona