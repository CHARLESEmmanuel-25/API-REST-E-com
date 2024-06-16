import { Router } from "express";
import 'dotenv/config';

export default class CoreRoutes {
    
    constructor() {
        this.router = Router();
    }

    routes(method, path, controller) {
        // Exemple: route pour récupérer toutes les ressources du modèle
        this.router[method](path, controller);
    }

   
}
