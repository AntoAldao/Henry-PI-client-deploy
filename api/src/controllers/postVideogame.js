const { Videogame } = require('../db.js');

const postVideogame = async (req, res) => {
    // Crear un videojuego en la base de datos
    // Obtener los datos enviados en el body
    try {
        const { name, description, platforms } = req.body;
        const {genres, ...data} = req.body;
        if (!name,!description,!platforms){
            throw new Error('Faltan datos obligatorios');
        }
        const newVideogame = await Videogame.create(data);
        genres.forEach(async genre => {
            await newVideogame.addGenre(genre);
        });
        
        res.status(201).send("Videojuego creado con exito");

    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = postVideogame;