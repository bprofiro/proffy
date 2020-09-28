import { Request, Response } from 'express';

import CreateUserService from '../services/User/CreateUserService';

interface User {
  name: string,
  github_username: string;
  avatar_url: string;
  whatsapp: string;
  bio: string;
}

export default class UsersController {
  async create(request: Request, response: Response): Promise<Response<User>> {
    const { github_username, whatsapp } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ github_username, whatsapp });

    return response.json(user);
  }
}