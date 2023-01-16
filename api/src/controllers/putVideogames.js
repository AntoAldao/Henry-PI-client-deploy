const {Videogame} = require('../db.js');

const putVideogame = async (req, res) => {
    try {
        const {id} = req.params;
        const {genres, name, description, date, rating, platforms, image} = req.body;
        const videogame = await Videogame.findByPk(id);
        if (!videogame) { throw new Error('El videojuego no existe') }
        await Videogame.update({  
            name,
            description,
            date,
            rating,
            platforms,
            image
        }, {where: {id: id}})
        res.status(200).send("Videojuego actualizado");
        videogame.setGenres(genres);
    } catch (error) {
        res.status(400).send(error.message);
    }

    
}

module.exports = putVideogame;