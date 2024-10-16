const { Persona, Pasaporte } = require('../models')

const personaController = {}

const getPersonas = async (req, res) => {
    try {
      const personas = await Persona.findAll({
        include: Pasaporte
      })
      res.json(personas)
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener personas' })
    }
  }
personaController.getPersonas = getPersonas

const addPersona = async (req, res) => {
    const { nombre, apellido, pasaporte } = req.body
    try {
        const persona = await Persona.create({
            nombre,
            apellido
        })
        if(pasaporte){
            const pasaporteNuevo = await Pasaporte.create({
                numero: pasaporte.numero,
                fechaExpedicion: pasaporte.fechaExpedicion,
                personaId: persona.id
            })
        }
        res.status(201).json(persona)
    } catch (error) {
        res.status(500).json({message: "Error en la creación de la persona"})
    }
}
personaController.addPersona = addPersona

module.exports = personaController