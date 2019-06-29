require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.SERVER_PORT;

const beritaRoute = require('./src/routers/berita');
const kategoriRoute = require('./src/routers/kategori');

app.listen(port, () => {
    console.log(`\n App Listen post ${port}`);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/berita', beritaRoute);
app.use('/kategori', kategoriRoute);
app.use('/account_operator', account_operatorRoute);
