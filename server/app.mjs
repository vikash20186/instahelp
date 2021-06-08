import express from 'express';
import path from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.mjs';
import usersRouter from './routes/users.mjs';

const app = express();

// mongoose.connect('mongodb://localhost/27017', function(err) {
//     if(err) throw err;
//     console.log('Connected To MongoDB !!!')
// });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
