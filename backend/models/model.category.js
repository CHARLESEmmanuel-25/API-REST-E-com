import mongoose from 'mongoose';

// Define the schema for the 'category' collection
const categorySchema = mongoose.Schema({
    name: { type: String, required: true }, // Define the 'name' property as a required string
    icon: { type: String }, 
    color: { type: String } 
}, { timestamps: true }); // Add 'createdAt' and 'updatedAt' timestamps automatically

// Create the 'Category' model based on the schema
const Category = mongoose.model('category', categorySchema);

export default Category; // Export the model 
