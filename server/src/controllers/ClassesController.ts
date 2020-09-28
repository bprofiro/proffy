import { Request, Response } from "express";

import CreateClassesService from '../services/Classes/CreateClassesService';
import ListAllClassesService from '../services/Classes/ShowAllClassesService';
import FilterClassesService from "../services/Classes/ShowFilteredClassesService";


export default class ClassesController {
  async index(request: Request, response: Response) {
    const filters = request.query;

    const subject = filters.subject as string;
    const weekDay = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.week_day || !filters.subject || !filters.time) {
      return response.status(400).json({
        error: 'Missing filters to search classes'
      })
    }

    const filterClasses = new FilterClassesService();

    const classes = await filterClasses.execute({ subject, time, weekDay });

    return response.json(classes);
  }

  async create(request: Request, response: Response) {
    const {
      user_id,
      subject,
      cost,
      schedule
    } = request.body;

    const createClasses = new CreateClassesService();

    const classes = await createClasses.execute({ user_id, subject, cost, schedule });

    return response.status(201).json(classes);
  }

  async all(request: Request, response: Response) {
    const { id } = request.body;

    const listClasses = new ListAllClassesService();

    const classes = await listClasses.execute(id);

    return response.json(classes);
  }
}