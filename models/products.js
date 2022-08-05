'use strict';

var mysql = require('mysql'),
    Schema = msyql.Schema;

var ProductSchema = Schema({
    name: String,
    brand: String,
    price: String,
    fecha_lanz: Date,
    pags: String
})

module.exports = mysql.model('Product', ProductSchema);