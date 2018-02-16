'use strict';
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
consign()
    .include('./routes')
    .into(app);

app.get('/', (req, res) => {
    res.status(200).send('Hola desde MEVN !!s!');
})

module.exports = app;