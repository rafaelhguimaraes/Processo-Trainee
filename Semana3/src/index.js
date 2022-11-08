const express = require('express');
// Importando o Express
const app = express();

app.get('/', (request, response) => {
    return response.json({message: 'Hello, world!'});
});

// setando a rota 3333 
app.listen(3333);

