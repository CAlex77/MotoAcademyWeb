
const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const routes = require('./routes')

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta : ${port}`)
})