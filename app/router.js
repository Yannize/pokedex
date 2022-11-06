// initialisation du router
const express = require('express')
const router = express.Router()

// import du fichier controller
const controller = require('./controller')

router.get('/', controller.getAllPokemon);
router.get('/pokemon/:id', controller.getOnePokemon)
router.get('/types/:type', controller.getPokemonsFilteredByType)

// export de l'objet router
module.exports = router