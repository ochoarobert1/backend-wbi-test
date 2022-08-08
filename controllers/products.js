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
        var params = req.body;
        product.name = params.name;
        product.images = params.images;
        product.marca = params.marca;
        product.modelo = params.modelo;
        product.precio = params.precio;
        product.fecha_lanz = params.fecha_lanz;
        product.stores = params.stores;

        product.save((err, productStored) => {
            if (err) return res.status(500).send({
                message: 'Error: No ha sido guardado'
            });

            if (!productStored) return res.status(404).send({
                message: 'No se ha guardado el objeto'
            });

            return res.status(200).send({
                product: productStored
            });
        });
    },
    getProduct: function(req, res) {
        var productId = req.params.id;

        if (productId == null) return res.status(404).send({
            message: 'No existe el ID'
        });

        Product.findById(productId, (err, product) => {
            if (err) return res.status(500).send({
                message: 'Error al devolver los datos'
            });

            if (!product) return res.status(404).send({
                message: 'No se ha guardado el objeto'
            });

            return res.status(200).send({
                product
            });
        });
    },
    getProducts: function(req, res) {
        Product.find({}).sort().exec((err, products) => {
            if (err) return res.status(500).send({
                message: 'Error al devolver los datos'
            });

            if (!products) return res.status(404).send({
                message: 'No hay productos'
            });

            return res.status(200).send({
                products
            });
        });
    }
}

module.exports = controller;