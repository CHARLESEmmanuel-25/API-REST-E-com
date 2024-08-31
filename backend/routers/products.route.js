import CoreRoutes from "./Core.routes.js";
import "dotenv/config";
import productsController from "../controllers/productsController.js";

const api = process.env.API_URL;

export default class ProductsRoutes extends CoreRoutes {
  constructor() {
    super();
  }

  defineRoutes() {
    this.routes("get", `${api}/`, productsController.allProduct);
    this.routes("get", `${api}/products/:id`,productsController.oneProduct);
    this.routes("get", `${api}/products/get/count`,productsController.countProduct);
    this.routes("get", `${api}/products/get/featured/:count`,productsController.featuredProduct);
    this.routes("post", `${api}/products`, productsController.createProduct);
    this.routes("patch", `${api}/products/:id`, productsController.updateProduct);
    this.routes("delete", `${api}/products/:id`, productsController.deleteProduct);
  }
}
