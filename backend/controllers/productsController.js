import mongoose from "mongoose";
import Category from "../models/model.category.js";
import Product from "../models/model.product.js";
const productsController ={

    allProduct: async (req,res)=>{
        try {
            const products = await Product.find().select('name image -_id');
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json({
                error: err.message,
                success: false,
            });
        }

    },

    oneProduct: async (req,res)=>{
        if (!mongoose.isValidObjectId(req.params.id)) return res.status(404).json({ message: "l'identifiant de ce produit n'existe pas"});
        
        try {
            const productId = req.params.id
            const product = await Product.findById(productId).select('name image -_id');
            console.log();
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json({
                error: err.message,
                success: false,
            });
        }

    },

    countProduct: async (req, res) => {
        try {
            const countProduct = await Product.countDocuments();
            res.status(200).json({ count: countProduct });
        } catch (err) {
            res.status(500).json({
                error: err.message,
                success: false,
            });
        }
    },

    featuredProduct: async (req, res) => {
        const count = req.params.count ? req.params.count : 0;
        try {
            const product = await Product.find({isFeatured: true}).limit(+count);
            res.status(200).json( product);
        } catch (err) {
            res.status(500).json({
                error: err.message,
                success: false,
            });
        }
    },
     
    
    createProduct: async (req,res)=>{
        
        const category = await Category.findById(req.body.category);
        if (!category) return res.status(400).send('Invalide Category') 
        const newProduct = new Product({
            name: req.body.name,
            image: req.body.image,
            images: req.body.images,
            description: req.body.description,
            brand: req.body.brand,
            category:req.body.category,
            countInStock:req.body.countInStock,
            rating:req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured
        });
       
        try {
            const product = await Product.create(newProduct);
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json({
                error: err.message,
                success: false,
            });
        }

    },

    updateProduct: async (req,res)=>{
        const id = req.params.id;
        if (!mongoose.isValidObjectId(req.params.id)) return res.status(404).json({ message: "l'identifiant de ce produit n'existe pas"});
        const updateProduct = req.body;
       
        console.log(updateProduct);
        try {
            const Product = await Product.findByIdAndUpdate(id,updateProduct, {new: true});
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({
                error: err.message,
                success: false,
            });
        }

    },
    deleteProduct: async (req,res)=>{
        if (!mongoose.isValidObjectId(req.params.id)) return res.status(404).json({ message: "l'identifiant de ce produit n'existe pas"});
        const id = req.params.id;
        try {
            const product = await Product.findByIdAndDelete(id);
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json({
                error: err.message,
                success: false,
            });
        }

    },
}

export default productsController;