const axios = require('axios');
const { Genre } = require('../db.js');

const {API_KEY} = process.env;
const getGenresByApi = async (req, res) => {
    try {
        let genres = []
        await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        .then((response) => {
            genres = response.data.results; // guardo solo los generos 
            genres = genres.map((genre) => { // mapeo para obtener solo los datos que necesito 
               return {name:genre.name}
            });
        })
        
        await Genre.bulkCreate(genres); // guardo los generos en la bd
        res.status(201).send('generos guardados en la bd');
        
    } catch (error) {
        res.status(400).send(error);
    }

}
module.exports = getGenresByApi;