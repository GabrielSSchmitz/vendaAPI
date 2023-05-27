import Banco from "@modules/banco/typeorm/entities/Banco";
import Conta from "../typeorm/entities/Conta";
import ContaRepository from "../typeorm/repositories/ContaRepository";
import { getCustomRepository } from "typeorm";
import BancoRepository from "@modules/banco/typeorm/repositories/BancoRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
  name: string,
  banco: Banco
}

export class CreateContaService{
  public async execute({ name, banco }: IRequest): Promise<Conta> {
    const contaRepository = getCustomRepository(ContaRepository);

    this.validarBanco(banco)

    const conta = contaRepository.create({ name, banco });

    await contaRepository.save(conta);

    return conta;
  }

  private validarBanco(bancoRequest: Banco){
    const bancoRepository = getCustomRepository(BancoRepository);

    if(!bancoRequest.id) throw new AppError("Selecione um banco!");

    const banco = bancoRepository.findById(bancoRequest.id);

    if(!banco) throw new AppError("Banco não exitente");

  }
}
