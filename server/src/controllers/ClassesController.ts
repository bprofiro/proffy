import { Request, Response } from "express";
import axios from 'axios';

import db from '../database/connection';
import convertHourToMinutes from "../utils/ConvertHourToMinutes";

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  async index(request: Request, response: Response) {
    const filters = request.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.week_day || !filters.subject || !filters.time) {
      return response.status(400).json({
        error: 'Missing filters to search classes'
      })
    }

    const timeInMinutes = convertHourToMinutes(time);

    const classes = await db('classes')
      .whereExists(function() {
        this.select('class_schedule.*')
        .from('class_schedule')
        .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
        .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
        .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
        .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return response.json(classes);
  }

  async create(request: Request, response: Response) {
    const {
      github_username,
      whatsapp,
      subject,
      cost,
      schedule
    } = request.body;
  
    const user = await axios.get(`https://api.github.com/users/${github_username}`);
      
    const { name, avatar_url, bio } = user.data;

    const trx = await db.transaction();
  
    try {
      const insertedUsersIds = await trx('users').insert({
        name,
        github_username,
        avatar_url,
        whatsapp,
        bio
      });

      
      const user_id = insertedUsersIds[0];
    
      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id
      });
    
      const class_id = insertedClassesIds[0];
    
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to)
        }
      })
    
      await trx('class_schedule').insert(classSchedule);
    
      await trx.commit();
  
      return response.status(201).send();
    } catch (err) {
      await trx.rollback();
  
      return response.status(400).json({
        error: 'Unexpected error while creating new class'
      })
    }
  }

  async all(request: Request, response: Response) {
    const classes = await db('classes')
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);;

    return response.json(classes);
  }
}