import Conta from '@modules/conta/typeorm/entities/Conta';
import User from '@modules/users/typeorm/entities/User';
import { getCustomRepository } from 'typeorm';
import Despesa from '../typeorm/entities/Despesa';
import DespesaRepository from '../typeorm/repositories/DespesaRepository';

interface IRequest {
  descricao: string,
  valorTotal: number,
  totalParcelas: number,
  transferir: Boolean,
  conta: Conta,
  transferirPara: Conta,
  usuario: User,
  vencimento: Date
}

export default class CreateDespesaService {
  public async execute( request: IRequest): Promise<Despesa> {
    const despesaRepository = getCustomRepository(DespesaRepository);

    const despesa = despesaRepository.create(request);

    await despesaRepository.save(despesa);

    return despesa;
  }
}
