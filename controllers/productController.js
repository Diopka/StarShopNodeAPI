import expressAsyncHandler from 'express-async-handler';

import Product from '../models/productModel.js';

// @desc   Fetch all products
// @route  GET /api/products
// @access Public 
const getProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc Fetch single product
// @route Get /api/products/:id
// @access Public
const getProductById = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if(product)
  {
    res.json(product);
  } else {
    req.statusCode(404)
    throw new Error('Product not found');
  }
});

export {
  getProducts,
  getProductById
}