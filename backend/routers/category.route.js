import CoreRoutes from "./Core.routes.js"; // Import the CoreRoutes class from the 'Core.routes.js' file
import "dotenv/config"; // Load environment variables from the '.env' file
import categorysController from "../controllers/categorys.Controller.js"; // Import the categorysController for handling category-related operations

const api = process.env.API_URL; // Get the base API URL from environment variables

  // Define and export the CategorysRoutes class extending CoreRoutes
export default class CategorysRoutes extends CoreRoutes {
    constructor() {
    super(); // Call the constructor of the parent CoreRoutes class
  }

  defineRoutes() {
    //  Define a route for  all categories
      this.routes("get", `${api}/categories`, categorysController.allCategory);

        // Define a routes for creating a new category
    this.routes("post", `${api}/categories`, categorysController.createCategory);

    // Define a route for updating a category by its ID
        // This route uses the HTTP PATCH method to partially update a category
      this.routes("patch", `${api}/categorie/:id`, categorysController.updateCategory);

        // Define a route for deleting a category by its ID
    // This route uses the HTTP DELETE method to remove a category
    this.routes("delete", `${api}/categorie/:id`, categorysController.deleteCategory);
  }
}
