import { Request, Response } from "express";

import db from '../database/connection';
import CreateConnectionService from "../services/Connections/CreateConnectionService";

export default class ConnectionsController {
  async index(request: Request, response: Response) {
    const totalConnecttions = await db('connections').count('* as total');

    const { total } = totalConnecttions[0];

    return response.json({ total });
  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    const createConnection = new CreateConnectionService();

    createConnection.execute(user_id);

    return response.status(201).send();
  }
}