const express = require('express');
const router = express.Router();
const Wilaya = require('../models/Wilaya');
const Commune = require('../models/Commune');

// @route   GET api/locations/wilayas
// @desc    Get all wilayas
// @access  Public
router.get('/wilayas', async (req, res) => {
  try {
    const wilayas = await Wilaya.find().sort({ code: 1 });
    res.json(wilayas);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/locations/communes/:wilayaId
// @desc    Get all communes for a wilaya
// @access  Public
router.get('/communes/:wilayaId', async (req, res) => {
  try {
    const communes = await Commune.find({ wilaya: req.params.wilayaId }).sort({ name: 1 });
    res.json(communes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
