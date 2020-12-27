import 'dotenv/config';
import 'reflect-metadata';

import express from "express";
import cors from "cors";
import { errors } from 'celebrate';

import 'express-async-errors';

import routes from './routes';
import ErrorHandler from './middlewares/ErrorHandler';

import './database';
import './container';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.use(ErrorHandler);

app.listen(3333, () => {
    console.log('Server listening on port 3333!')
});