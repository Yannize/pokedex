// import des data sur les pokemons (tableau d'objet)
const pokemons = require('../pokedex.json');

// import d'une fonction utilitaire pour ajouter des 0 pour récupérer la bonne image par rapport à l'id du pokemon
const addLeadingZeros = require('../utils')

// création de l'objet controller
const controller = {
    // rend la vue pokedex.ejs pour afficher la liste des pokemons
    getAllPokemon: (_, res) => {
        res.render('pokedex.ejs', { title: 'Pokedex', pokemons, addLeadingZeros, filtred: false, home: true });
    },

    // rend la vue pokemon.ejs pour afficher les infos d'un seul pokemon
    getOnePokemon: (req, res) => {
        const pokemonId = Number(req.params.id)
        const pokemonFounded = pokemons.find(pokemon => pokemon.id === pokemonId)
        res.render('pokemon.ejs', { pokemon: pokemonFounded, addLeadingZeros, home: false })
    },

    getPokemonsFilteredByType: (req, res) => {
        // rend la vue pokemon.ejs pour afficher la liste des pokemons filtré par le type de pokemon choisi
        const pokemonType = req.params.type
        const pokemonsFiltered = pokemons.filter(pokemon => pokemon.type.includes(pokemonType))
        res.render('pokedex.ejs', { title: pokemonType, pokemons: pokemonsFiltered, addLeadingZeros, filtred: true, home: true })
    }
}

// export de l'objet controller
module.exports = controller