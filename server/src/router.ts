import {Router} from 'express';
import authMiddleare from './app/middleware/authMiddleware';
import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';

const router = Router();

router.post('/users', UserController.store);
router.post('/auth', AuthController.authenticate);
router.get('/users',authMiddleare, UserController.index);
export default router;