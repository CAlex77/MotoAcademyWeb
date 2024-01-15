const express = require('express')
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

app.post('/alunos', (req, res) =>{
    res.send({"Hello":'world'})
});