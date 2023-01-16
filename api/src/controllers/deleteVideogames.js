const {Videogame} = require('../db.js');

const deleteVideogame = async (req, res) => {
    try {
        const {id} = req.params;
        const videogame = await Videogame.findByPk(id);
        if (!videogame) { throw new Error('El videojuego no existe') }
        await Videogame.destroy({where: {id: id}})
        res.status(200).send("Videojuego eliminado");
    } catch (error) {
        res.status(404).send(error.message);
    }
    
}

module.exports = deleteVideogame;