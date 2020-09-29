import axios from 'axios';
import db from '../database/connection';

interface User {
  name: string,
  github_username: string;
  avatar_url: string;
  whatsapp: string;
  bio: string;
}

interface UserData {
  github_username: string;
  whatsapp: string;
}

class UsersRepository {
  public async create({ github_username, whatsapp }: UserData): Promise<User> {
    const userFromGithub = await axios.get(`https://api.github.com/users/${github_username}`);

    const { id, name, avatar_url, bio } = userFromGithub.data;

    const trx = await db.transaction();

    const insertedUser = await trx('users').insert({
      github_id: id,
      name,
      github_username,
      avatar_url,
      whatsapp,
      bio
    });

    const user = {
      user_id: insertedUser[0],
      name,
      github_id: id,
      github_username,
      avatar_url,
      whatsapp,
      bio
    };

    await trx.commit();

    return user;
  }

  public async findByGithub(github_username: string): Promise<User | void> {
    const trx = await db.transaction();

    const checkSameGithub = await trx<User>('users')
      .select('users.*')
      .where('users.github_username', '=', github_username);

    return checkSameGithub[0];
  }
}

export default UsersRepository;
