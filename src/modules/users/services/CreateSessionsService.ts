import AppError from '@shared/errors/AppError';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UsersRepositort';
import authConfig from '@config/auth';
interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

export default class CreateSessionsService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const usersRepository = getCustomRepository(UserRepository);

    /**
     * Validação de email
     */
    const user = await usersRepository.findByEmail(email);

    if (!user) throw new AppError('E-mail não cadastrado', 401);

    /**
     * Validação de senha
     */
    const validatePassword = await compare(password, user.password);
    if (!validatePassword) throw new AppError('Senha incorreta', 401);

    /**
     * Criação de token
     */
    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { user, token };
  }
}
