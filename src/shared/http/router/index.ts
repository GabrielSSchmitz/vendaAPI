import productsRouter from '@modules/products/routes/products.routes';
import { Router } from 'express';

const router = Router();

router.use('/products', productsRouter);

router.get('/', (request, response) => {
  return response.json({ message: 'Hello guy' });
});

export default router;
