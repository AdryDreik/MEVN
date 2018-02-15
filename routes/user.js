'use strict';

const express = require('express');
const userDao = require('../dao/user');

const app = express.Router();
app.get('/users', (req, res) => {
    console.log('------------------------------------');
    console.log(userDao.getUser());
    console.log('------------------------------------');
})

app.post('/users', (req, res) => {
    console.log('------------------------------------');
    console.log(userDao.saveUser(req,res));
    console.log('------------------------------------');
})

module.exports = app;