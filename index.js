// initialisation Express
const express = require('express');
const app = express();

// import du router
const router = require('./app/router')

const PORT = process.env.PORT ?? 3000;

// réglage de EJS et du dossier views
app.set('view engine', 'ejs');
app.set('views', 'views');

// réglage du dossier public pour renvoyer automatiquement les fichiers static
app.use(express.static('public'));

// middleware qui envoi toutes les requêtes dans le router
app.use(router)

// lancement du server
app.listen(PORT, () => {
    console.log(`🚀 server running on http://localhost:${PORT}`);
});