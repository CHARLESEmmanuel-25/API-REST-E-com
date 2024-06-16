import CoreRoutes from "./Core.routes.js"; // Assurez-vous que le chemin d'accès est correct
import 'dotenv/config';
import usersController from "../controllers/users.controller.js";

const api = process.env.API_URL;

export default class UsersRoutes extends CoreRoutes {
    
    constructor() {
        super();
    }

    routes() {
        this.router.get(`${api}/users`, usersController.allUser);
    }

}
