import { getCustomRepository } from "typeorm";
import Banco from "../typeorm/entities/Banco";
import BancoRepository from "../typeorm/repositories/BancoRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
  id: string
}

export default class ShowBancoService {

  public async execute({ id }: IRequest): Promise<Banco> {
    const bancoRepository = getCustomRepository(BancoRepository);
    const banco = await bancoRepository.findById(id);

    if(!banco) throw new AppError("Banco não encontrado!")

    return banco;
  }

}
