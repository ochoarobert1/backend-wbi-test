'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// CORS

// ROUTES 
app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>asdadsd</h1>"
    );
});

app.get('/test', (req, res) => {
    res.status(200).send({
        message: 'gola aasdasd'
    });
});

app.post('/test', (req, res) => {
    console.log(req.body);
    res.status(200).send({
        nombre: req.body.nombre,
        apellido: req.body.apellido
    });
});

module.exports = app;