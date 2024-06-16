import CoreRoutes from "./Core.routes.js"; // Assurez-vous que le chemin d'accès est correct
import 'dotenv/config';
import usersController from "../controllers/users.controller.js";

const api = process.env.API_URL;

export default class UsersRoutes extends CoreRoutes {
    constructor() {
        super();
    }

    defineRoutes() {
        this.routes('get', `${api}/users`, usersController.allUser);
        this.routes('post', `${api}/users`, usersController.createUser);
        this.routes('patch', `${api}/users/:id`, usersController.updateUser);
        this.routes('delete', `${api}/users/:id`, usersController.deleteUser);
    }
}
