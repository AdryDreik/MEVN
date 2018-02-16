'use strict';
const userDao = require('../dao/user');

module.exports = (app) => {
    app.post('/auth', (req, res) => {
        userDao.findOne(req, res)
    })
}