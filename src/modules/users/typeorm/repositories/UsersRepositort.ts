import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  /**
   * Pesquisa produto pelo nome
   * @param name
   * @returns User | undefined
   */
  public async findByName(name: string): Promise<User | undefined> {
    return this.findOne({
      where: {
        name,
      },
    });
  }

  /**
   * Pesquisa pelo email
   * @param email
   * @returns User | undefined
   */
  public async findByEmail(email: string): Promise<User | undefined> {
    return this.findOne({
      where: {
        email,
      },
    });
  }

  /**
   * Pesquisa pelo id
   * @param id
   * @returns User | undefined
   */
  public async findById(id: string): Promise<User | undefined> {
    return this.findOne({
      where: {
        id,
      },
    });
  }
}
