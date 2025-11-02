const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// @route   POST api/orders
// @desc    Create an order
// @access  Public
router.post('/', async (req, res) => {
  const { customer, products, totalAmount, deliveryMethod } = req.body;

  try {
    const newOrder = new Order({
      customer,
      products,
      totalAmount,
      deliveryMethod,
    });

    const order = await newOrder.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
