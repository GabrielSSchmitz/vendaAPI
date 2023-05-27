import { Request, Response } from "express";
import ListContaService from "../services/ListContaService";
import CreateBancoService from "@modules/banco/services/CreateBancoService";
import { CreateContaService } from "../services/CreateContaService";

export default class ContaController {

  public async index(request: Request, response: Response): Promise<Response> {
    const listConta = new ListContaService();
    const lsContas = await listConta.execute();

    return response.json(lsContas);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {name, banco } = request.body
    const createConta = new CreateContaService();

    const conta =  await createConta.execute({ name, banco });

    return response.json( conta )
  }

}
