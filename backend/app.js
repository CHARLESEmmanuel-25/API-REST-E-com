import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import morgan from 'morgan';
import UsersRoutes from './routers/users.route.js'
import ProductsRoutes from './routers/products.route.js';
import CategorysRoutes from './routers/category.route.js';
import cors from "cors";


const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.options('*', cors());
// Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
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