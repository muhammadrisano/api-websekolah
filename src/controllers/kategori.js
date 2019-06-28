const kategoriModel = require('../models/kategori');
const MiscHelper = require('../helpers/helpers');

module.exports = {
    getKategori: (req, res) => {
        kategoriModel.getKategori()
            .then((resultKategori) => {
                const result = resultKategori
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    detailKategori: (req, res) => {
        const id_kategori = req.params.id
        kategoriModel.detailKategori(id_kategori)
            .then((resultKategori) => {
                const result = resultKategori
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    insertKategori: (req, res) => {
        const data = {
            nama_kategori: req.body.name_kategori
        }
        kategoriModel.insertKategori(nama_kategori)
            .then((resultKategori) => {
                const result = resultKategori
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    updateKategori: (req, res) => {
        const id_kategori = req.params.id
        const data = {
            name_kategori: req.body.nama_kategori
        }
        kategoriModel.updateKategori(id_kategori, data)
            .then((resultKategori) => {
                const result = resultKategori
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    deleteKategori: (req, res) => {
        const id_kategori = req.params.id
        kategoriModel(id_kategori)
            .then((resultKategori) => {
                const result = resultKategori
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}