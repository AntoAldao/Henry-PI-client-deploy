const {API_KEY} = process.env;
const axios = require('axios');

const details = (req, res) => {
// Obtener el detalle de un videojuego en particular con el id recibido por params 
//  Debe traer:
//  imagen 
//  nombre
//  generos
//  descripcion 
//  fecha de lanzamiento
//  rating
//  plataformas
    try {
        const { id } = req.query;
        let details = []
        axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`) // obtengo los detalles del juego
        .then((response) => {
            details.push(response.data); // guardo los detalles del juego
            details = details.map((game) => { // mapeo para obtener solo los datos que necesito
                return {
                    id : game.id,
                    name: game.name,
                    image: game.background_image,
                    genres: game.genres.map((genre) => genre.name),
                    description: game.description,
                    date: game.released,
                    rating: game.rating,
                    platforms: game.platforms.map((p) => p.platform.name),
                };
            });
            res.status(200).send(details); // envio los detalles del juego
        })
        
    } catch (error) {
        res.status(404).send(error.message);
    }

};
module.exports = details;