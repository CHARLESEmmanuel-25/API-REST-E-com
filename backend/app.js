import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import morgan from 'morgan';
import UsersRoutes from './routers/users.route.js'
import ProductsRoutes from './routers/products.route.js';
import CategorysRoutes from './routers/category.route.js';
import cors from "cors";
import authJwt from './helpers/jwt.js';
import erroHandler from './helpers/error-handler.js';



const app = express();
app.use(cors());
app.options('*', cors());
// Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use(erroHandler);
// Routes
const users = new UsersRoutes();
const products = new ProductsRoutes;
const category = new CategorysRoutes;

users.defineRoutes();
products.defineRoutes();
category.defineRoutes();

app.use(users.router);
app.use(category.router);
app.use(products.router);





export default app;