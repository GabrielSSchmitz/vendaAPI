import { Router } from "express";
import ContaController from "../controllers/ContaController";
import isAuthenticated from "@shared/http/middleware/isAuthenticated";
import { Joi, Segments, celebrate } from "celebrate";

const contaRouter = Router();
const contaController = new ContaController();


contaRouter.get(
  '/',
  isAuthenticated,
  contaController.index
)

contaRouter.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY] : {
      name: Joi.string().required(),
      banco: Joi.object().required()
    }
  }),
  contaController.create
)
export default contaRouter;
