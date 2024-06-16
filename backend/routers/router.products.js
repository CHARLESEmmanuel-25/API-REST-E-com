import { Router } from "express";
import Product   from "../models/model.product.js";
import User from "../models/model.user.js";
import 'dotenv/config';
const router = Router();
const api = process.env.API_URL
// Route GET pour récupérer les produits
router.get(`/`, async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({
            error: err.message,
            success: false,
        });
    }
});

// Route POST pour créer un nouveau produit
router.post(`${api}/products`, async (req, res) => {
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
}),

// Route GET pour récupérer tous les utilisateurs
router.get(`${api}/users`, async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({
            error: err.message,
            success: false,
        });
    }
});

// Route POST pour créer un nouvel utilisateur
router.post(`${api}/users`, async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: req.body.passwordHash,
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        apartment: req.body.apartment,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country,
    });

    try {
        const createdUser = await user.save();
        res.status(201).json(createdUser);
    } catch (err) {
        res.status(500).json({
            error: err,
            success: false,
        });
    }
});



export default router;