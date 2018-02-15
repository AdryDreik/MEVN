'use strict';
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

console.log('-----------Iniciando-------------------------');
consign()
    .include('./routes')
    .into(app);
console.log('-----------Finalizando-------------------------');


app.get('/', (req, res) => {
    res.status(200).send('Hola desde MEVN !!s!');
})

module.exports = app;