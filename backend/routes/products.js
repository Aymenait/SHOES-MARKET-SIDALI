const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/products
// @desc    Create a product
// @access  Private
router.post('/', async (req, res) => {
  const { name, price, description, images, sizes, colors } = req.body;

  try {
    const newProduct = new Product({
      name,
      price,
      description,
      images,
      sizes,
      colors,
    });

    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
