import axios from 'axios';
import db from '../../database/connection';
import UsersRepository from '../../repositories/UsersRepository';

interface User {
  name: string,
  github_username: string;
  avatar_url: string;
  whatsapp: string;
  bio: string;
}

interface RequestDTO {
  github_username: string;
  whatsapp: string;
}

class CreateUserService {
  private usersRepository: UsersRepository;

  constructor(UsersRepository: UsersRepository) {
    this.usersRepository = UsersRepository;
  }

  public async execute({ github_username, whatsapp }: RequestDTO): Promise<User | void> {
    const checkSameGithub = await this.usersRepository.findByGithub(github_username);

    if (checkSameGithub) {
      throw new Error('This user is already registered.');
    };

    const user = await this.usersRepository.create({ github_username, whatsapp });

    return user;
  }
}

export default CreateUserService;