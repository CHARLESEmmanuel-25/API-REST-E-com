import mongoose from 'mongoose'

// Schéma et modèle de produit
const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    images: { type: String },
    description: { type: String, required: true },
    brand: { type: String, default: '' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'category', required:true },
    countInStock: { type: Number, min: 0, max: 255},
    rating: {type: Number, default: 0},
    numReviews: { type: Number, default: 0},
    isFeatured: { type: Boolean, default: false}

}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;