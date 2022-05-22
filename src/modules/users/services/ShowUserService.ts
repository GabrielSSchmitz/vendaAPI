import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UsersRepositort';

interface IRequest {
  id: string;
}

export default class ShowUserService {
  public async execute({ id }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UserRepository);
    const user = await usersRepository.findById(id);

    if (!user) throw new AppError('Usuario não encontrado');

    return user;
  }
}
