import Category from "../models/model.category.js"; // import category model 
//controller
const categorysController ={

    allCategory: async (req, res) => {
        try {
            // Use Mongoose's 'find' mean find all from catgory collection
            const categorys = await Category.find();
    
            // Send a JSON response with a 200 status 
            res.status(200).json(categorys);
        } catch (err) {
            // If an error occurs, send a JSON response with a 500 status code and  details.
            res.status(500).json({
                error: err.message,
                success: false,
            });
        }
    },
    

    createCategory: async (req,res)=>{
        const newcategory = req.body;
        console.log(newcategory);
        try {
            const category = await Category.create(newcategory);
            res.status(200).json(category);
        } catch (err) {
            res.status(500).json({
                error: err.message,
                success: false,
            });
        }

    },

    updateCategory: async (req,res)=>{
        const id = req.params.id;
        const updatecategory = req.body;
        console.log(updatecategory);
        try {
            const category = await Category.findByIdAndUpdate(id,updatecategory, {new: true});
            res.status(200).json(category);
        } catch (err) {
            res.status(500).json({
                error: err.message,
                success: false,
            });
        }

    },
    deleteCategory: async (req,res)=>{
        const id = req.params.id;
        try {
            const category = await Category.findByIdAndDelete(id);
            res.status(200).json(category);
        } catch (err) {
            res.status(500).json({
                error: err.message,
                success: false,
            });
        }

    },
}

export default categorysController;