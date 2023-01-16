const {API_KEY} = process.env;
const axios = require('axios');
const { Videogame, Genre } = require('../db.js');

const details = async (req, res) => {
// Obtener el detalle de un videojuego en particular con el id recibido por params 
//  Debe traer:
//  imagen 
//  nombre
//  generos
//  descripcion 
//  fecha de lanzamiento
//  rating
//  plataformas
    const { id } = req.params;
    let videogame;
    await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`) // obtengo los detalles del juego
    .then((response) => {
        videogame = {
            id : response.data.id,
            name: response.data.name,
            image: response.data.background_image,
            genres: response.data.genres.map((genre) => genre.name),
            description: response.data.description,
            date: response.data.released,
            rating: response.data.rating,
            platforms: response.data.platforms.map((p) => p.platform.name),
        }
    })
    .catch((error) => {})
    try {
        if (!videogame) 
            videogame = await Videogame.findByPk(id,{include:Genre}) // busco el juego en la bd
        
    } catch (error) {
        
    }
    if(videogame){ // si existe el juego en la bd, devuelvo los detalles del juego
        videogame = {
            id : videogame.id,
            name: videogame.name,
            image: videogame.image,
            genres: videogame.genres.map((genre) => genre.name),
            description: videogame.description,
            date: videogame.date,
            rating: videogame.rating,
            platforms: videogame.platforms,
        }
        return res.status(200).send(videogame);
    }else{ 
        return res.status(404).send('No se encontro el juego'); // si no existe el juego en la bd, devuelvo un mensaje
    }

};
module.exports = details;