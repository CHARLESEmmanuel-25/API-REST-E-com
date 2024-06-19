import CoreRoutes from "./Core.routes.js";
import "dotenv/config";
import categorysController from "../controllers/categorys.Controller.js";

const api = process.env.API_URL;

export default class CategorysRoutes extends CoreRoutes {
  constructor() {
    super();
  }

  defineRoutes() {
    this.routes("get", `${api}/categories`, categorysController.allCategory);
    //route a ajouter GET categorie by id 
    this.routes("post", `${api}/categories`, categorysController.createCategory);
    this.routes("patch", `${api}/categorie/:id`, categorysController.updateCategory);
    this.routes("delete", `${api}/categorie/:id`, categorysController.deleteCategory);
  }
}
