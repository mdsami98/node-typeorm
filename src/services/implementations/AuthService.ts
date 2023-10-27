import { Request, Response, NextFunction } from 'express';
import AuthServiceInterface from '../interfaces/AuthServiceInterface';

class AuthService implements AuthServiceInterface {
    constructor() {}
    login = async (req: Request, res: Response, next: NextFunction) => {
        return { message: 'Working' };
    };
}

export default AuthService;
