import mongoose from 'mongoose'

// Schéma et modèle de user

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    phone: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    street: { type: String },
    apartment: { type: String },
    zip: { type: String },
    city: { type: String },
    country: { type: String }
}, { timestamps: true });

const User = mongoose.model('user', userSchema);

export default User;