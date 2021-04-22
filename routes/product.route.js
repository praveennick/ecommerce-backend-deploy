var express = require('express');

var ProductController= require('../controllers/product.controller');

var productRouter = express.Router();

//http://localhost:9478/admin/addProduct
productRouter.post('/addProduct',ProductController.addProduct);

//http://localhost:9478/admin/allProducts
productRouter.get('/allProducts',ProductController.allProducts);

//http://localhost:9478/admin/getProductById/
productRouter.get('/getProductById/:pid',ProductController.getProductById);

//http://localhost:9478/admin/deleteProduct/
productRouter.delete('/deleteProduct/:id',ProductController.deleteProduct);

//http://localhost:9478/admin/updateProduct/
productRouter.put('/updateProduct/:id',ProductController.updateProduct);

//http://localhost:9478/admin/getProductByChoice
productRouter.get('/getProductByChoice',ProductController.getProductByChoice);

//http://localhost:9478/admin/filterProducts
productRouter.get('/filterProducts',ProductController.filterProducts);

module.exports = productRouter;