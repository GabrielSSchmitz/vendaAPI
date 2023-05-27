import { getCustomRepository } from "typeorm";
import UserRepository from "../typeorm/repositories/UsersRepositort";
import AppError from "@shared/errors/AppError";
import User from "../typeorm/entities/User";

interface IRequest {
  name: string;
  email: string;
}

export default class UpdateUserService {
  public async execute({name, email}: IRequest, id:string): Promise<User> {
    const usersRepository = getCustomRepository(UserRepository);

    /**
     * Validação de email já existente
     */
    const emailExist = await usersRepository.findByEmailWithoutUser(email, id);

    if (emailExist) throw new AppError('E-mail já cadastrado');

    var user: User = usersRepository.create();

    await usersRepository.findById(id).then(userFilter => { if(userFilter) user = userFilter });

    if(!user) throw new AppError('Usuário não existe na base de dados');

    user.name = name;
    user.email = email;
    user.updated_at = new Date();

    await usersRepository.save(user);

    return user;
  }
}
