import 'reflect-metadata';

import express from "express";

import 'express-async-errors';

import routes from './routes';
import ErrorHandler from './middlewares/ErrorHandler';

import './database';
import './container';

const app = express();

app.use(express.json());

app.use(routes);

app.use(ErrorHandler);

app.listen(3333, () => {
    console.log('Server listening on port 3333!')
});