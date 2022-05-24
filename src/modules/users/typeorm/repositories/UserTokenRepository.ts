import { EntityRepository, Repository } from 'typeorm';
import UserToken from '../entities/UserToken';

@EntityRepository(UserToken)
export default class UserTokenRepository extends Repository<UserToken> {
  /**
   * Pesquisa produto pelo token
   * @param token
   * @returns UserToken | undefined
   */
  public async findByToken(token: string): Promise<UserToken | undefined> {
    return await this.findOne({
      where: {
        token,
      },
    });
  }

  /**
   * Cria o token
   * @param id_user
   * @returns UserToken | undefined
   */
  public async generate(user_id: string): Promise<UserToken | undefined> {
    const userToken = await this.create({ user_id });

    return await this.save(userToken);
  }
}
