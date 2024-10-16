const { Autor, Libro } = require('../models')

async function initialAutoresLibros(){
    try {
        const autor1 = await Autor.create({nombre: 'Juan Gomez', nacionalidad: 'Argentina', fechaNacimiento: new Date('1980-06-05'), premios: 5})
        const autor2 = await Autor.create({nombre: 'Gabriel García Márquez', nacionalidad: 'Chile', fechaNacimiento: new Date('1965-08-05'), premios: 10})
        const autor3 = await Autor.create({nombre: 'Lucas Gomez', nacionalidad: 'Argentina', fechaNacimiento: new Date('1990-06-10'), premios: 2})

        const libro1 = await Libro.create({ titulo: 'Cien Años de Soledad', fechaPublicacion: new Date('1967-06-05'), genero: 'Dramático', ventas: 4500})
        const libro2 = await Libro.create({ titulo: 'La Casa de los Espíritus', fechaPublicacion: new Date('2002-03-01'), genero: 'Ciencia Ficción'})
        const libro3 = await Libro.create({ titulo: 'Ficciones', fechaPublicacion: new Date('2005-06-01'), genero: 'Ciencia Ficción', ventas: 5000})

        await autor1.addLibro(libro1)
        await autor2.addLibros([libro1, libro2])
        await autor3.addLibro([libro2, libro3])
        console.log('Los datos y las relaciones fueron creados exitosamente')
    } catch (error) {
        console.log('Error al crear los datos: ', error)
    }
}

module.exports = initialAutoresLibros