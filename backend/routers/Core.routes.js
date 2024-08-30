import { Router } from "express"; // Import the Router class from the Express library

// export default class CoreRoutes {

export default class CoreRoutes {
    
    constructor() {
        // Initialize a new Router instance from Express
        this.router = Router();
    }

    routes(method, path, controller) {
        // Define a route with the given HTTP method (e.g., 'get', 'post'), path, and controller function
        // Example: route for fetching all resources of a model
        this.router[method](path, controller);
    }

}
