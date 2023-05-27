import { getCustomRepository } from 'typeorm';
import Banco from '../typeorm/entities/Banco';
import BancoRepository from '../typeorm/repositories/BancoRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
}

export default class CreateBancoService {
  public async execute({ name }: IRequest): Promise<Banco> {
    const bancoRepository = getCustomRepository(BancoRepository);

    /**
     * Validando se o nome informado esta vazio
     */
    if (name.replace(' ', '').length < 1)
      throw new AppError('Nome do banco é um campo obrigatório');

    const banco = bancoRepository.create({
      name,
    });

    await bancoRepository.save(banco);

    return banco;
  }
}
