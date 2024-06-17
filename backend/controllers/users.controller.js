import User from "../models/model.user.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const usersController = {

  login: async (req, res) => {

    try {

        const user = await User.findOne({ email: req.body.email }).select(
            "name email phone passwordHash"
          );
      
          const passwordUser = req.body.passwordHash;
         
          if (!user) {
            return res.status(400).send("la personne est introuvable");
          }
      
          if (user && bcrypt.compareSync(passwordUser, user.passwordHash)) {
            const secret = process.env.secret;
            const token = jwt.sign(
                {
                    userId: user.id
                },
                secret
            );
            res.status(200).send({user: user.email, token: token});
          } else{
            res.status(400).send("mauvais mot de passe");
          }
      
        
    } catch (error) {
        res.status(500).json({
            error: error.message,
            success: false,
          });
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


  createUser: async (req, res) => {
    try {
      const salt = bcrypt.genSaltSync(10);

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, salt),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        apartment: req.body.apartment,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country,
      });
      console.log(newUser.passwordHash);
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
