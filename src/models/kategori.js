require('dotenv').config()
const connection = require('../configs/db')

module.exports = {
    getKategori: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM kategori', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    detailKategori: (id_kategori) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM kategori WHERE id_kategori = ?', id_kategori, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertKategori: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSER INTO kategori SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateKategori: (id_kategori, data) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE kategori SET ? WHERE id_kategori = ?', [data, id_kategori], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteKategori: (id_kategori) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM kategori WHERE id_kategori= ?', id_kategori, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}