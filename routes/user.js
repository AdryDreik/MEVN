'use strict';

const userDao = require('../dao/user');

module.exports = (app) => {
    app.get('/api/v1/users', (req, res) => {
        console.log('------------------------------------');
        console.log(userDao.getUser());
        console.log('------------------------------------');
    })
    
    app.post('/api/v1/users', (req, res) => {
        console.log('------------------------------------');
        console.log(userDao.saveUser(req,res));
        console.log('------------------------------------');
    })
}
