const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();
router.post('/add-user', adminController.postUserDetails);
router.get('/get-user', adminController.getUserDetails);

router.delete('/delete-user/:id', adminController.deleteUserDetails);

// // /admin/add-product => GET
// router.get('/add-product', adminController.getAddProduct);

// // /admin/products => GET
// router.get('/products', adminController.getProducts);

// // /admin/add-product => POST
// router.post('/add-product', adminController.postAddProduct);

// router.get('/edit-product/:productId', adminController.getEditProduct);

// router.post('/edit-product', adminController.postEditProduct);

// router.post('/delete-product', adminController.postDeleteProducts);

module.exports = router;
