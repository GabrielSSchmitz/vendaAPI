import { EntityRepository, Repository } from 'typeorm';
import { Not } from "typeorm"
import User from '../entities/User';
import { override } from 'joi';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  /**
   * Pesquisa produto pelo nome
   * @param name
   * @returns User | undefined
   */
  public async findByName(name: string): Promise<User | undefined> {
    return await this.findOne({
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
    return await this.findOne({
      where: {
        email,
      },
    });
  }

    /**
   * Pesquisa pelo email menos o id informado
   * @param email
   * @returns User | undefined
   */
    public async findByEmailWithoutUser(email: string, id:string): Promise<User | undefined> {
      return await this.findOne({
        where: {
          email,
          id: Not(id)
        },
      });
    }

  /**
   * Pesquisa pelo id
   * @param id
   * @returns User | undefined
   */
  public async findById(id: string): Promise<User | undefined> {
    return await this.findOne({
      where: {
        id,
      },
    });
  }


}
