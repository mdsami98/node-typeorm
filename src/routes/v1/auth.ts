import express, { Router } from 'express';
import AuthController from '../../controllers/AuthController';

const router: Router = express.Router();
const authController = new AuthController();

router.get('/login', authController.login);

export default router;
