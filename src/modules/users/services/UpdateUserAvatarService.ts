import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import fs from 'fs';
import path from 'path';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UsersRepositort';

interface IRequest {
  userId: string;
  avatarFileName: string | undefined;
}

export default class UpdateUserAvatarService {
  public async execute({ userId, avatarFileName }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UserRepository);
    const user = await usersRepository.findById(userId);

    if (!user) throw new AppError('Usuário não cadastrado');

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.diretory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      /**
       * Verifica se o aquivo existe
       */
      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFileName;

    await usersRepository.save(user);

    return user;
  }
}
