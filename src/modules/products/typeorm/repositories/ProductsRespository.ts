import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/Product';

@EntityRepository(Product)
export default class ProductRepository extends Repository<Product> {
  /**
   * Pesquisa produto pelo nome
   * @param name
   * @returns Product | undefined
   */
  public async findByName(name: string): Promise<Product | undefined> {
    return this.findOne({
      where: {
        name,
      },
    });
  }
}
