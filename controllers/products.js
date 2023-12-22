const rootDir = require('../util/path');
const path = require('path');

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

exports.postAddProduct = (req, res, next) => {  
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProduct = (req, res, next) => {
    Product.fetchAll(products => {

        res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    
    });
    
};