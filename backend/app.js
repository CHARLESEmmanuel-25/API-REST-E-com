import express from 'express'
import bodyParser from 'body-parser'
import 'dotenv/config'
import morgan from 'morgan'
import mongoose from 'mongoose'

const PORT = process.env.PORT
const app = express()
const api = process.env.API_URL

// midlleware
app.use(bodyParser.json())
app.use(morgan('tiny'))

// Schéma et modèle de produit
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    countInStock: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);

// Route GET pour récupérer les produits
app.get(`${api}/products`, async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({
            error: err,
            success: false,
        });
    }
});

// Route POST pour créer un nouveau produit
app.post(`${api}/products`, async (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock,
    });

    try {
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (err) {
        res.status(500).json({
            error: err,
            success: false,
        });
    }
});


export default app;
