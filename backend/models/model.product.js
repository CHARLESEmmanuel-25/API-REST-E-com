import mongoose from 'mongoose'

// Schéma et modèle de produit
const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    countInStock: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);

export default Product;