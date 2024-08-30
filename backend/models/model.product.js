import mongoose from 'mongoose'; // Import Mongoose

// Schéma of product
const productSchema = mongoose.Schema({
    name: { type: String, required: true }, // name
    image: { type: String, required: true }, // Image 
    images: { type: String }, // Images supplémentaires
    description: { type: String, required: true }, // Description 
    brand: { type: String, default: '' }, // Brand
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'category', required: true }, // Référence à la catégorie
    countInStock: { type: Number, min: 0, max: 255 }, // Quantité en stock
    rating: { type: Number, default: 0 }, // Note moyenne
    numReviews: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false } 
}, { timestamps: true }); // createdAt et updatedAt

// Model of product
const Product = mongoose.model('Product', productSchema);

export default Product; // Exporte le modèle
