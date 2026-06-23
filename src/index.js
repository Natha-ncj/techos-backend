const express = require('express');
const clientesRouter = require('./routes/clientes');

const app = express();

app.use(express.json());

app.use('/clientes', clientesRouter);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});