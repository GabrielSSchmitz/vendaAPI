import { getCustomRepository } from "typeorm";
import Banco from "../typeorm/entities/Banco";
import BancoRepository from "../typeorm/repositories/BancoRepository";

export default class ListBancoService {
  public async execute(): Promise<Banco[]> {
    const bancoRepository = getCustomRepository(BancoRepository);
    const lsBanco = bancoRepository.find();

    return lsBanco;
  }

}
