const express = require('express');
const ProductController = require('../Controller/ProductController');
const router = express.Router();

 ProductController

router.get('/product/getallproduct',ProductController.getAllProducts)
router.post('/product/create',ProductController.CreatProduct)
router.post('/product/update/:id',ProductController.UpdateProduct)
router.get('/product_delete/:id',ProductController.deleteProduct)
router.get('/product_detail/:id',ProductController.getProductdetail)




module.exports = router;