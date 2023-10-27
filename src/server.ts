import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import config from '@config/config';
import AppError from '@utils/AppError';

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Error middleware
import { errorHandler } from '@middleware/errorHandler';

app.get('/', (req: Request, res: Response): Response => {
    return res.send('Hello, World!');
});

app.use('/', routes);

// app.use(errorHandler);

// For Not found Url
app.all('*', (req, res, next) => {
    next(new AppError('Not Found', 404));
});

// Global Error

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
