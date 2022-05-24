import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UserToken from '../typeorm/entities/UserToken';
import UserRepository from '../typeorm/repositories/UsersRepositort';
import UserTokenRepository from '../typeorm/repositories/UserTokenRepository';

interface IRequest {
  email: string;
}

export default class SendForgotPasswordEmailService {
  public async execute({ email }: IRequest): Promise<void> {
    const usersTokenRepository = getCustomRepository(UserTokenRepository);
    const usersRepository = getCustomRepository(UserRepository);

    const userExist = await usersRepository.findByEmail(email);

    if (!userExist) throw new AppError('E-mail de usuário não cadastrado');

    const userToken = await usersTokenRepository.generate(userExist.id);

    console.log('[Token] - Token de e-mail gerado: ' + userToken?.token);
  }
}
