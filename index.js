try {
    'use strict';
    const mongoose = require('mongoose');
    const app = require('./app');
    const port = process.env.PORT || 5000;
    mongoose.connect('mongodb://localhost/mevn', (err, res) => {
        if (err) {
            throw new Error(err);
        } else {
            app.listen(port, () => {
                console.log('------------------------------------');
                console.log('Conexion satisfactoria a la base de datos');
                console.log(`Servidor ejecutandose en el puerto ${port}`);
                console.log('------------------------------------');
            })
        }
    })
} catch (err) {
    console.log('----------------entrando por el error--------------------');
    console.log(err instanceof TypeError);
    console.log('------------------------------------');
}
