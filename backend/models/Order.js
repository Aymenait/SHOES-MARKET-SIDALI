const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customer: {
        fullName: { type: String, required: true },
        phone: { type: String, required: true },
        wilaya: { type: String, required: true },
        commune: { type: String, required: true },
        address: { type: String, required: true },
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            },
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            size: { type: String, required: true },
            color: { type: String, required: true },
            price: { type: Number, required: true },
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    deliveryMethod: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'Pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Order', OrderSchema);
