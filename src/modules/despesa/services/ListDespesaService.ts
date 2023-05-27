import { getCustomRepository } from "typeorm";
import Despesa from "../typeorm/entities/Despesa";
import DespesaRepository from "../typeorm/repositories/DespesaRepository";

export default class ListContaService {

  public async execute(): Promise<Despesa[]> {

    const despesaRepository = getCustomRepository(DespesaRepository);
    const lsDespesa = despesaRepository.find();

    return lsDespesa;
  }
}
