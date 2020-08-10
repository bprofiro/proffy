import { Request, Response } from "express";
import axios from 'axios';

import db from '../../database/connection';
import convertHourToMinutes from "../../utils/ConvertHourToMinutes";

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class UsersController {
  async create(request: Request, response: Response) {
    // Request dos dados no body
    // Verifica se há algum usuário com esses dados já cadastrado no banco
    // Salva os dados novos no banco de dados
    // Retorna uma mensagem de okay
    // return response.status(201).send();
  }

  async update(request: Request, response: Response) {
    // Request do id do usuário
    // Request dos dados no body
    // Verifica se há algum usuário com esses dados já cadastrado no banco
    // Salva os dados novos no banco de dados
    // Retorna uma mensagem de okay
    // return response.status(200).json(updatedUser);
  }
}