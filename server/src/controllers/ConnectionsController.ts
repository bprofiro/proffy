import { Request, Response } from "express";

import CreateConnectionService from "../services/Connections/CreateConnectionService";
import ShowTotalOfConnectionsService from "../services/Connections/ShowTotalOfConnectionsServices";

export default class ConnectionsController {
  async index(request: Request, response: Response) {
    const showTotalOfConnections = new ShowTotalOfConnectionsService();

    const total = await showTotalOfConnections.execute();

    return response.json({ total });
  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    const createConnection = new CreateConnectionService();

    createConnection.execute(user_id);

    return response.status(201).send();
  }
}