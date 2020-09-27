import axios from 'axios';
import db from '../../database/connection';

interface User {
  name: string,
  github_username: string;
  avatar_url: string;
  whatsapp: string;
  bio: string;
}

interface RequestDTO {
  github_username: string,
  whatsapp: string,
}

class CreateUserService {
  public async execute({ github_username, whatsapp }: RequestDTO): Promise<User | void> {
    const userFromGithub = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name, avatar_url, bio } = userFromGithub.data;

    const trx = await db.transaction();

      const newUser = {
        name,
        github_username,
        avatar_url,
        whatsapp,
        bio
      };

      await trx('users').insert(newUser);

      await trx.commit();

      return newUser;
  }
}

export default CreateUserService;