import User from "../models/model.user.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const usersController = {

  login: async (req, res) => {

    const { email, password } = req.body;

    // Vérifier si les champs requis sont remplis
    if (!email || !password) {
        return res.status(400).send("Veuillez remplir tous les champs requis.");
    }

    try {
        // Vérifier si l'utilisateur existe dans la base de données
        const user = await User.findOne({ email }).select('name email phone passwordHash isAdmin');

        if (!user) {
            return res.status(404).send("Utilisateur non trouvé.");
        }

        // Vérifier si le mot de passe correspond
        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

        if (!isPasswordValid) {
            return res.status(400).send("Mot de passe incorrect.");
        }

        // Générer le jeton JWT
        const secret = process.env.secret;
        const token = jwt.sign(
            {
                userId: user._id, 
                isAdmin: user.isAdmin
            },
            secret,
            { expiresIn: '1d' }
        );

        // Envoyer la réponse avec le jeton JWT et l'e-mail de l'utilisateur
        res.status(200).json({ user: user.email, token });

    } catch (error) {
        // En cas d'erreur, renvoyer une réponse avec le statut 500 et l'erreur
        res.status(500).json({ error: error.message });
    }

   

  },


  allUser: async (req, res) => {
    try {
      const users = await User.find().select("name phone email -_id");
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({
        error: err.message,
        success: false,
      });
    }
  },

  oneUser: async (req, res) => {
    try {
      const id = req.params.id;
      if (!mongoose.isValidObjectId(id)) {
        return res
        .status(404)
        .json({ message: "cette utilisateur n'existe pas" });
      }
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({
        error: err.message,
        success: false,
      });
    }
  },


  createUser: async (req, res) => {
    
    try {
      const salt = bcrypt.genSaltSync(10);
      const password = req.body.passwordHash
     
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(password, salt),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        apartment: req.body.apartment,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country,
      });
      console.log(newUser);
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({
        error: err.message,
        success: false,
      });
    }
  },


  updateUser: async (req, res) => {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(req.params.id))
      return res
        .status(404)
        .json({ message: "cette utilisateur n'existe pas" });
    const updateUser = req.body;

    console.log(updateUser);
    try {
      const userUpdate = await User.findByIdAndUpdate(id, updateUser, {
        new: true,
      });
      res.status(200).json(userUpdate);
    } catch (err) {
      res.status(500).json({
        error: err.message,
        success: false,
      });
    }
  },

  deleteUser: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findByIdAndDelete(id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({
        error: err.message,
        success: false,
      });
    }
  },
};

export default usersController;
