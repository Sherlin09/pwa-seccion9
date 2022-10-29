// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();


const mensajes = [{
        _id: '123',
        user: 'spiderman',
        mensaje: 'Hola mundo'
    },
    {
        _id: '123',
        user: 'hulk',
        mensaje: 'Hola mundo'
    }, {
        _id: '1234',
        user: 'ironman',
        mensaje: 'Hola mundo'
    }
];




// Get mensajes
router.get('/', function(req, res) {
    // res.json('Obteniendo mensajes');
    res.json(mensajes);
});




module.exports = router;