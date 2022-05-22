import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import ProductRepository from '../typeorm/repositories/ProductsRespository';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

export default class CreateProductService {
  public async execute({
    name,
    price,
    quantity,
  }: IRequest): Promise<Product | undefined> {
    const productsRepository = getCustomRepository(ProductRepository);
    const productsExists = await productsRepository.findByName(name);

    if (productsExists)
      throw new AppError('Produto já existente com esse nome na base de dados');

    if (price < 0)
      throw new AppError('Preço do produto informado não pode ser negativo');

    const product = await productsRepository.create({
      name,
      price,
      quantity,
    });

    await productsRepository.save(product);

    return product;
  }
}
