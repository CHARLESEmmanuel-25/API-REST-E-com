import CoreRoutes from "./Core.routes.js";
import "dotenv/config";
import categorysController from "../controllers/categorys.Controller.js";

const api = process.env.API_URL;

export default class CategorysRoutes extends CoreRoutes {
  constructor() {
    super();
  }

  defineRoutes() {
    this.routes("get", `${api}/categorys`, categorysController.allCategory);
    this.routes("post", `${api}/categorys`, categorysController.createCategory);
    this.routes("patch", `${api}/categorys/:id`, categorysController.updateCategory);
    this.routes("delete", `${api}/categorys/:id`, categorysController.deleteCategory);
  }
}
