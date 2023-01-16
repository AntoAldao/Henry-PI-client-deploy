const { Genre } = require('../db.js');

const getGenres = async (req, res) => {
//Obtener todos los tipos de géneros de videojuegos posibles
//En una primera instancia deberán traerlos desde rawg y 
// guardarlos en su propia base de datos y luego ya utilizarlos desde allí
    try {
        const genres = await Genre.findAll();
        res.status(200).send(genres);
    } catch (error) {
        res.status(404).send(error.message);
    }
};
module.exports = getGenres;