require('dotenv').config()
const connection = require('../configs/db');

module.exports = {
    getBerita: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM berita', (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        })
    },
    detailBerita: (berita_id) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM berita WHERE berita_id = ?', berita_id, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(err);
                }
            })
        })
    },
    createBerita: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO berita SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err);
                }
            })
        })
    },
    updateBerita: (berita_id, data) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE berita SET ? WHERE berita_id = ?', [data, berita_id], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    deleteBerita: (berita_id) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM berita WHERE berita_id = ?', berita_id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }
}