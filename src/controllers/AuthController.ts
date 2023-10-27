import { Request, Response, NextFunction } from 'express';
import AuthService from '@services/AuthService';
import catchAsync from '@utils/helper';

class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }
    login = catchAsync(
        async (req: Request, res: Response, next: NextFunction) => {
            const response = await this.authService.login(req, res, next);
            res.status(200).send(response);
        }
    );
}

export default AuthController;
