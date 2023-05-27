import { EntityRepository, Repository } from 'typeorm';
import Despesa from '../entities/Despesa';

@EntityRepository(Despesa)
export default class DespesaRepository extends Repository<Despesa> {

  public async findById(id: string): Promise<Despesa | undefined> {
    return await this.findOne({
      where: {
        id
      }
    })
  }
}
