'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const {user} = require('./routes');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// midlewares 
app.use('/api/v1', user);
app.get('/', (req, res) => {
    res.status(200).send('Hola desde MEVN !!s!');
})

module.exports = app;