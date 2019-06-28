const express = require('express');
const Route = express.Router();
const beritaController = require('../controllers/berita');


Route
    .get('/', beritaController.getBerita)
    .get('/:id', beritaController.detailBerita)
    .post('/', beritaController.insertBerita)
    .patch('/:id', beritaController.updateBerita)
    .delete('/:id', beritaController.deleteBerita)

module.exports = Route;