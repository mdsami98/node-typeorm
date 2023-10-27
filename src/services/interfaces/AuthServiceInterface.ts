import { Request, Response, NextFunction } from 'express';

interface AuthServiceInterface {
    login: (req: Request, res: Response, next: NextFunction) => Promise<any>;
}

export default AuthServiceInterface;
