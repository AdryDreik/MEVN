'use strict';
const bcrypt = require('bcrypt-nodejs');
const {User} = require('../models');

module.exports = {
    getUser: () => {
        const user = new User();
        return user.find();
    },
    saveUser: (req, res) => {
        const user = new User();
        user.name = req.body.name;
        user.surname = req.body.surname;
        user.email = req.body.email;
        user.role = req.body.role;
        user.image = req.body.image;
        if (req.body.password) {
            bcrypt.hash(req.body.password, null, null, (err, hash) => {
                if (err) {
                    throw new Error(err);      
                }
                user.password = hash;
                user.save((err, userStored) => {
                    if (err) {
                        res.status(500).json({
                            finalizado: false,
                            mensaje: err
                        }) 
                    }
                    res.status(200).json({
                        finalizado: true,
                        mensaje: 'Usuario exitosamente guardado',
                        datos: userStored
                    })
                })   
            })
        } else {
            res.status(412).json({
                finalizado: false,
                mensaje: 'Error en los parametros'
            })
        }
    }
}