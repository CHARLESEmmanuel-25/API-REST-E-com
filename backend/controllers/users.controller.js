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

    }
}

export default usersController;