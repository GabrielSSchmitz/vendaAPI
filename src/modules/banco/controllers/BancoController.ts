import { Request, Response } from "express";
import CreateBancoService from "../services/CreateBancoService";
import ListBancoService from "../services/ListBancoService";
import ShowBancoService from "../services/ShowBancoService";

export default class BancoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listBancos = new ListBancoService();
    const lsBanco = await listBancos.execute();

    return response.json(lsBanco);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showBanco = new ShowBancoService();

    const banco = await showBanco.execute({ id });

    return response.json(banco)
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const createBanco = new CreateBancoService();

    const banco = await createBanco.execute({ name });

    return response.json(banco);
  }

}
