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
    },
    findOne: (req, res) => {
        const params = req.body;
        if (params.password && params.email) {
            User.findOne({
                email: params.email
            }, (err, user) => {
                if (err) {
                    res.status(500).json({
                        finalizado: false,
                        mensaje: err,
                        datos: {}
                    })
                } else {
                    bcrypt.compare(params.password, user.password, (err, check) => {
                        if (err) {
                            res.status(412).json({
                                finalizado: false,
                                mensaje: err,
                                datos: {}
                            })      
                        } else {
                            if (check) {
                                res.status(200).json({
                                    finalizado: true,
                                    mensaje: 'Usuario satisfactoriamente logueado',
                                    datos: user
                                })
                            } else {
                                res.status(412).json({
                                    finalizado: false,
                                    mensaje: 'Error en la contraseña',
                                    datos: {}
                                })  
                            }
                        }
                    })
                }
            })
        } else {
            res.status(412).json({
                finalizado: false,
                mensaje: 'Error al enviar los parametros',
                datos: {}
            })
        }
        User.findOne()
    }
}