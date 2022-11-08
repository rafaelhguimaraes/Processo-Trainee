const express = require('express');
// Importando o Express
const app = express();


app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

// setando a rota 3333 
app.listen(3333);

