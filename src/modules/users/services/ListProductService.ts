import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UsersRepositort';

export default class ListUserService {
  public async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UserRepository);
    const Users = usersRepository.find();

    return Users;
  }
}
