import { getCustomRepository } from "typeorm";
import ContaRepository from "../typeorm/repositories/ContaRepository";
import Conta from "../typeorm/entities/Conta";

export default class ListContaService {

  public async execute(): Promise<Conta[]> {

    const contaRepository = getCustomRepository(ContaRepository);
    const lsConta = contaRepository.find();

    return lsConta;
  }
}
