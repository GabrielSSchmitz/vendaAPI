import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import DeleteUserService from '../services/DeleteUserService';
import ListUserService from '../services/ListProductService';
import ShowUserService from '../services/ShowUserService';

export default class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUsers = new ListUserService();
    const users = await listUsers.execute();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password });

    return response.json(user);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showUser = new ShowUserService();

    const user = await showUser.execute({ id });

    return response.json(user);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteUser = new DeleteUserService();

    await deleteUser.execute({ id });

    return response.json([]);
  }
}
