import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import morgan from 'morgan';
import UsersRoutes from './routers/users.route.js'


const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
// Routes
const users = new UsersRoutes();
users.defineRoutes();
app.use(users.router)




export default app;