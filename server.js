import app from "./backend/app.js";
import 'dotenv/config';
import mongoose from "mongoose";
import { createServer } from "node:http";

const PORT = process.env.PORT || 3000; // Définit un port par défaut si process.env.PORT n'est pas défini
const BDD = process.env.BDD;

const httpServer = createServer(app);

mongoose.connect(BDD, {
    dbName: 'e-shop',
})
.then(() => {
    console.log('Database connection successful');
})
.catch((err) => {
    console.error('Database connection error:', err.message);
});

httpServer.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
