import mongoose from 'mongoose'

// Schéma et modèle de oder

const orderSchema = mongoose.Schema({
    orderItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderItem', required: true }],
    shippingAddress1: { type: String, required: true },
    shippingAddress2: { type: String },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
    status: { type: String, default: 'Pending' },
    totalPrice: { type: Number },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    dateOrdered: { type: Date, default: Date.now }
}, { timestamps: true });

const Order = mongoose.model('order', orderSchema);

export default Order;