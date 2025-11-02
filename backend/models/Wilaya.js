const mongoose = require('mongoose');

const WilayaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    name_ar: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        unique: true,
    },
});

module.exports = mongoose.model('Wilaya', WilayaSchema);
