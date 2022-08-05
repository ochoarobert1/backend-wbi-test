'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = Schema({
    name: String,
    images: [String],
    marca: String,
    modelo: String,
    precio: String,
    fecha_lanz: Date,
    stores: [String]
});

module.exports = mongoose.model('Product', ProductSchema);