'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    product_routes = require('./routes/products');

// MIDDLEWARE
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// CORS

// ROUTES 
app.use('/', product_routes);
app.use('/test', product_routes);
app.use('/save-product', product_routes);

module.exports = app;