const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

const pokemons = require('./pokedex.json');

function addLeadingZeros(nbr) {
    const str = nbr.toString()

    if (str.length === 1) {
        return '00' + str
    }

    if (str.length === 2) {
        return '0' + str
    }

    return str
}

app.get('/', (_, res) => {
    res.render('pokedex.ejs', { title: 'Pokedex', pokemons, addLeadingZeros, filtred: false, home: true });
});

app.get('/pokemon/:id', (req, res) => {
    const pokemonId = Number(req.params.id)

    const pokemonFounded = pokemons.find(pokemon => pokemon.id === pokemonId)

    res.render('pokemon', { pokemon: pokemonFounded, addLeadingZeros, home: false })
})

app.get('/types/:type', (req, res) => {
    const pokemonType = req.params.type

    const pokemonsFiltered = pokemons.filter(pokemon => pokemon.type.includes(pokemonType))

    res.render('pokedex.ejs', { title: pokemonType, pokemons: pokemonsFiltered, addLeadingZeros, filtred: true, home: true })
})

app.listen(3000, () => {
    console.log(`🚀 server running on http://localhost:${PORT}`);
});