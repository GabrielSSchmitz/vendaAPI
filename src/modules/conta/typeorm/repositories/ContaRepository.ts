import { EntityRepository, Repository } from "typeorm";
import Conta from "../entities/Conta";

@EntityRepository(Conta)
export default class ContaRepository extends Repository<Conta> {

  public async findById(id: string): Promise<Conta | undefined> {
    return await this.findOne({
      where: {
        id
      }
    })
  }
}
