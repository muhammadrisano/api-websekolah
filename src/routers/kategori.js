const express = require('express');
const Route = express.Router();
const kategoriController = require('../controllers/kategori');

Route
    .get('/', kategoriController.getKategori)
    .get('/:id', kategoriController.detailKategori)
    .post('/', kategoriController.insertKategori)
    .patch('/:id', kategoriController.updateKategori)
    .delete('/:id', kategoriController.deleteKategori)

module.exports = Route;