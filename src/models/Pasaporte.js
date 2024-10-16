const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

class Pasaporte extends Model {}

Pasaporte.init({
    numero: DataTypes.STRING,
    fechaExpedicion : DataTypes.DATE
}, {
    sequelize,
    modelName: 'pasaporte'
})

module.exports = Pasaporte