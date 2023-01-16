const express = require('express');
const getVideogames = require('../controllers/getVideogames.js');
const getGenres = require('../controllers/getGenres.js');
const getGenresByApi = require('../controllers/getGenresByApi.js');
const details = require('../controllers/details.js');
const postVideogame = require('../controllers/postVideogame.js');
const deleteVideogame = require('../controllers/deleteVideogames.js');
const putVideogame = require('../controllers/putVideogames.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', getVideogames);
router.get('/genres', getGenres);
router.get('/genresByApi', getGenresByApi);
router.get('/videogames/:id', details);
router.post('/videogames', postVideogame);
router.delete('/videogames/:id', deleteVideogame);
router.put('/videogames/:id', putVideogame);


module.exports = router;
