const express = require('express');

const router = express.Router();

const {
  criarProduto,
  listarProdutos,
  buscarProduto,
  atualizarProduto,
  removerProduto
} = require('../controllers/produtosController');

router.post('/', criarProduto);

router.get('/', listarProdutos);

router.get('/:id', buscarProduto);

router.put('/:id', atualizarProduto);

router.delete('/:id', removerProduto);

module.exports = router;