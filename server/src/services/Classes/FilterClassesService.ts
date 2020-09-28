import db from '../../database/connection';
import convertHourToMinutes from "../../utils/ConvertHourToMinutes";


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

interface RequestDTO {
  weekDay: string;
  time: string;
  subject: string;
}

class FilterClassesService {
  public async execute({ weekDay, time, subject }: RequestDTO): Promise<Class[] | void> {
    
    const timeInMinutes = convertHourToMinutes(time);

    const classes = await db('classes')
      .whereExists(function() {
        this.select('class_schedule.*')
        .from('class_schedule')
        .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
        .whereRaw('`class_schedule`.`week_day` = ??', [Number(weekDay)])
        .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
        .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return classes;
  }
}

export default FilterClassesService;