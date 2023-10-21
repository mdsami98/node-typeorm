import { Router } from 'express';

const router = Router();

router.get('/login', (req, res) => {
    return res.send('Hello, Login!');
});

export default router;
