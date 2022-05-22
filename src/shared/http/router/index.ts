import productsRouter from '@modules/products/routes/products.routes';
import isAuthenticated from '@shared/http/middleware/isAuthenticated';
import sessionRouter from '@modules/users/routes/session.routes';
import userRouter from '@modules/users/routes/user.routes';
import { Router } from 'express';

const router = Router();

router.use('/products', isAuthenticated, productsRouter);
router.use('/users', userRouter);
router.use('/sessions', sessionRouter);

export default router;
