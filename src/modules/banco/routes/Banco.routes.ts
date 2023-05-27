import { Router } from "express";
import BancoController from "../controllers/BancoController";
import { Segments, celebrate } from "celebrate";
import Joi from "joi";
import isAuthenticated from "@shared/http/middleware/isAuthenticated";

const bancoRouter = Router();
const bancoController = new BancoController();

bancoRouter.get(
  '/',
  isAuthenticated,
  bancoController.index,
);

bancoRouter.get(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS] : { id : Joi.string().uuid().required() },
  }),
  bancoController.show
)

bancoRouter.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]:{
      name: Joi.string().required()
    }
  }),
  bancoController.create,
);


export default bancoRouter;
