import app from "./backend/app.js";
import 'dotenv/config';
import connectToDatabase from './backend/config/client.js'
import { createServer } from "node:http";

const PORT = process.env.PORT || 3000; // Définit un port par défaut si process.env.PORT n'est pas défini

const httpServer = createServer(app);
connectToDatabase();
httpServer.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
