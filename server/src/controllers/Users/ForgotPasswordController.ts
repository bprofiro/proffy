import { Request, Response } from 'express';


export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<void> {
    // Recebe o email do request.body
    // Verifica se há algum email assim na base de dados
    // Envia o email para o usuário
    // retorna uma mensagem de sucesso
    // return response.status(204).json();
  }
}