import { EntityRepository, Repository } from 'typeorm';
import Banco from '../entities/Banco';

@EntityRepository(Banco)
export default class BancoRepository extends Repository<Banco> {

  public async findById(id: string): Promise<Banco | undefined> {
    return await this.findOne({
      where: {
        id
      }
    })
  }
}
