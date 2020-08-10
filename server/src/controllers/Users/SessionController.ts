import { Request, Response } from 'express';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<void> {
    const { email, password } = request.body;

    // Recebe o email e a senha do request.body
    // verifica se já algum email cadastrado no banco de dados igual a esse
    // Faz a autenticação
    // Retorna o usuário e o token gerado
    // return response.json({ user, token });
  }
}