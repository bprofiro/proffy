import axios from 'axios';
import db from '../../database/connection';

interface Class {
  user_id: number,
  subject: string,
  cost: number,
  name: string,
  github_username: string;
  avatar_url: string;
  whatsapp: string;
  bio: string;
}
interface Schedule {
  weekDay: number;
  from: string;
  to: string;
}

class ListAllClassesService {
  public async execute(id: number): Promise<Class[] | void> {
    const classes = await db('classes')
    .join('users', 'classes.user_id', '=', 'users.id')
    .select(['classes.*', 'users.*'])
    .where('classes.user_id', '<>', id);

    return classes;
  }
}

export default ListAllClassesService;