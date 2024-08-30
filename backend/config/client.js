import mongoose from 'mongoose'; // Import Mongoose for MongoDB operations
import 'dotenv/config'; // Load environment variables from .env file

// Get MongoDB connection URL 
const BDD = process.env.BDD; 

// Asynchronous function to connect to the database
async function connectToDatabase() {
    try {
        const connection = await mongoose.connect(BDD); // Attempt to connect to MongoDB
        console.log('Database connection successful'); 
        return connection; // Return connection object
    } catch (err) {
        console.error('Database connection error:', err.message); // Log error message
        // Rethrow error for handling by caller
        throw err; 
    }
}
// Export the function for use in other modules
export default connectToDatabase; 

