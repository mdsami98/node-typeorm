import { Request, Response, NextFunction } from 'express';

import AppError from '@utils/AppError';

export const errorConverter = (
    err: any,
    _req: Request,
    _res: Response,
    next: NextFunction
) => {
    let error = err;
    if (!(error instanceof AppError)) {
        const statusCode = error.statusCode || 500;
        const message: string = error.message || `Sorry Something wrong `;
        error = new AppError(message, statusCode, err);
    }
    next(error);
};

export const errorHandler = (
    error: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    return res.status(error.HttpStatusCode || 500).json(error.JSON);
};
