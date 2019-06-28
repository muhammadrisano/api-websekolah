const beritaModel = require('../models/berita')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getBerita: (req, res) => {

        beritaModel.getBerita()
            .then((resultBerita) => {
                const result = resultBerita
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    detailBerita: (req, res) => {
        const berita_id = req.params.id

        beritaModel.detailBerita(berita_id)
            .then((resultBerita) => {
                const result = resultBerita;
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    insertBerita: (req, res) => {
        const { id_kategori, judul, isi, foto, penulis } = req.body
        const created_at = new Date();
        const updated_at = new Date();
        const data = {
            id_kategori,
            judul,
            isi,
            foto,
            penulis,
            created_at,
            updated_at
        }
        beritaModel.insertBerita(data)
            .then((resultBerita) => {
                const berita = resultBerita
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    updateBerita: (req, res) => {
        const berita_id = req.params.id
        const { id_kategori, judul, isi, foto, penulis } = req.body
        const data = {
            id_kategori,
            judul,
            isi,
            foto,
            penulis,
            updated_at: new Date()
        }
        beritaModel.updateBerita(berita_id, data)
            .then((resultBerita) => {
                const result = resultBerita;
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    deleteBerita: (req, res) => {
        const berita_id = req.params.id
        beritaModel.deleteBerita(berita_id)
            .then((resultBerita) => {
                const result = resultBerita;
                MiscHelper.response(res, result, 200);
            })
            .catch((error) => {
                console.log(error);
            })
    }


}