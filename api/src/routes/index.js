const express = require('express');
const getVideogames = require('../controllers/getVideogames.js');
const getGenres = require('../controllers/getGenres.js');
const getGenresByApi = require('../controllers/getGenresByApi.js');
const details = require('../controllers/details.js');
const postVideogame = require('../controllers/postVideogame.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', getVideogames);
router.get('/genres', getGenres);
router.get('/genresByApi', getGenresByApi);
router.get('/details', details);
router.post('/postVideogame', postVideogame);

module.exports = router;
