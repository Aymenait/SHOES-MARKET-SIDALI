const mongoose = require('mongoose');

const CommuneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    name_ar: {
        type: String,
        required: true,
    },
    wilaya: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wilaya',
        required: true,
    },
});

module.exports = mongoose.model('Commune', CommuneSchema);
