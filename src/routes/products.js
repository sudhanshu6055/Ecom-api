const express = require('express');
const router = express.Router();

const productController = require('../controller/products_controller');
//CREATE A PRODUCTS
router.get('/', productController.products);

//CREATE A PRODUCT
router.post('/create',productController.create);

 //DELETE
router.delete('/productID',productController.delete);

router.post('/:productID/update_quantity/',productController.updateQunatity);
module.exports=router;
