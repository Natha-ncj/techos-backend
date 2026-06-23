const express = require('express');
const router = express.Router();

const clientes = [
  { id: 1, nome: 'João Silva' },
  { id: 2, nome: 'Maria Souza' }
];
router.get('/', (req, res) => {
  res.status(200).json(clientes);
});

router.get('/:id', (req, res) => {
  const cliente = clientes.find(
    c => c.id === Number(req.params.id)
  );

  if (!cliente) {
    return res.status(404).json({
      erro: 'Cliente não encontrado'
    });
  }

  res.status(200).json(cliente);
});

router.post('/', (req, res) => {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({
      erro: 'Nome é obrigatório'
    });
  }

  const novoCliente = {
    id: clientes.length + 1,
    nome
  };

  clientes.push(novoCliente);

  res.status(201).json(novoCliente);
});

module.exports = router;