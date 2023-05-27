import isAuthenticated from "@shared/http/middleware/isAuthenticated";
import { Segments, celebrate } from "celebrate";
import { Router } from "express";
import Joi from "joi";
import DespesaController from "../controllers/DespesaController";

const despesaRouter = Router();
const despesaController = new DespesaController();

despesaRouter.get(
  '/',
  isAuthenticated,
  despesaController.index,
);

despesaRouter.get(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS] : { id : Joi.string().uuid().required() },
  }),
  despesaController.show
)

despesaRouter.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]:{
      descricao: Joi.string().required(),
      valorTotal: Joi.number().required(),
      totalParcelas: Joi.number().required().min(1),
      transferir: Joi.boolean().required(),
      conta: Joi.object(),
      transferirPara: Joi.optional()
    }
  }),
  despesaController.create,
);


despesaRouter.post(
  '/lancarDespesa',
  isAuthenticated,
  celebrate({
    [Segments.BODY]:{
      tipoLancamento: Joi.number().required(),
      valor: Joi.number().required(),
      vencimento: Joi.date().required(),
      conta: Joi.object().required(),
      contaSecundario: Joi.object().optional(),
      contaTransferencia: Joi.object().optional()
    }
  })
)


export default despesaRouter;
