'use strict'

var Product = require('../models/products');

var controller = {
    home: function(req, res) {
        return res.status(200).send({
            message: 'home'
        });
    },
    test: function(req, res) {
        return res.status(200).send({
            message: 'test'
        });
    },
    saveProduct: function(req, res) {
        var product = new Product();

        return res.status(200).send({
            message: 'save product'
        });
    }
}

module.exports = controller;