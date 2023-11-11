import 'reflect-metadata';
import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import config from '@config/config';
import AppError from '@utils/AppError';
// import DataBase from './orm/data-source';
import { dbCreateConnection } from './orm/dbCreateConection';
const app: Express = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Error middleware
import { errorConverter, errorHandler } from '@middleware/errorHandler';

app.get('/', (req: Request, res: Response): Response => {
    return res.send('Hello, World!');
});

app.use('/', routes);

// send back a 404 error for any unknown api request
app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new AppError('Not Found', 404));
});

// Global Error
// convert error to ApiError, if needed
app.use(errorConverter);
// handle error
app.use(errorHandler);

const start = async (): Promise<void> => {
    try {
        app.listen(config.PORT, () => {
            console.log(`Server started on port ${config.PORT}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

void start();
