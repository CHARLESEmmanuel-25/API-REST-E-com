import mongoose from 'mongoose'

// Schéma et modèle de category
const categorySchema = mongoose.Schema({
    name: { type: String, required: true },
    icon: { type: String },
    color: { type: String }
}, { timestamps: true });

const Category = mongoose.model('category', categorySchema);

export default Category;