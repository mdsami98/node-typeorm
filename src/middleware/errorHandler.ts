import { Request, Response, NextFunction } from 'express';

import AppError from '@utils/AppError';

export const errorHandler = (
    error: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    return res.status(error.HttpStatusCode).json(error.JSON);
};
