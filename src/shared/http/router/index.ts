
import bancoRouter from '@modules/banco/routes/Banco.routes';
import contaRouter from '@modules/conta/routes/Conta.routes';
import despesaRouter from '@modules/despesa/routes/Despesa.routes';
import sessionRouter from '@modules/users/routes/session.routes';
import userRouter from '@modules/users/routes/user.routes';
import { Router } from 'express';

const router = Router();

router.use('/users', userRouter);
router.use('/sessions', sessionRouter);
router.use('/banco', bancoRouter);
router.use('/conta', contaRouter);
router.use('/despesa', despesaRouter);

export default router;
