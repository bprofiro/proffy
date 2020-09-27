import convertHourToMinutes from "../../utils/ConvertHourToMinutes";
import db from '../../database/connection';

interface Class {
  user_id: number,
  subject: string,
  cost: number,
  schedule: Schedule[]
}

interface Schedule {
  weekDay: number;
  from: string;
  to: string;
}

interface RequestDTO {
  user_id: number,
  subject: string,
  cost: number,
  schedule: Schedule[]
}

class CreateClassesService {
  public async execute({ user_id, subject, cost, schedule }: RequestDTO): Promise<Class | void> {
    const trx = await db.transaction();

    const insertedClassesIds = await trx('classes').insert({
      subject,
      cost,
      user_id
    });
  
    const class_id = insertedClassesIds[0];
  
    const classSchedule = schedule.map((scheduleItem: Schedule) => {
      return {
        class_id,
        week_day: scheduleItem.weekDay,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to)
      }
    });

    const classes = {
      class_id,
      user_id,
      subject,
      cost,
      schedule
    };
  
    await trx('class_schedule').insert(classSchedule);
  
    await trx.commit();

    return classes;
  }
}

export default CreateClassesService;