import { Request, Response } from "express";
import CreateDespesaService from "../services/CreateDespesaService";

export default class DespesaController {
  public async index(request: Request, response: Response): Promise<Response> {
    return response.json("oi")

  }

  public async show(request: Request, response: Response): Promise<Response> {
    return response.json("oi")
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createDespesa = new CreateDespesaService();

    const despesa = await createDespesa.execute(request.body);

    return response.json(despesa);
  }

  public async lancarDespesa(request: Request, response: Response): Promise<Response> {


    return response.json('ola');
  }

}
