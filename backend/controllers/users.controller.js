import User from "../models/model.user.js"
const usersController ={

    allUser: async (req,res)=>{
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({
                error: err.message,
                success: false,
            });
        }

    },

    createUser: async (req,res)=>{
        const newUser = req.body;
        console.log(newUser);
        try {
            const user = await User.create(newUser);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({
                error: err.message,
                success: false,
            });
        }

    },

    updateUser: async (req,res)=>{
        const id = req.params.id;
        const updateUser = req.body;
        console.log(updateUser);
        try {
            const user = await User.findByIdAndUpdate(id,updateUser, {new: true});
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({
                error: err.message,
                success: false,
            });
        }

    },
    deleteUser: async (req,res)=>{
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
}

export default usersController;