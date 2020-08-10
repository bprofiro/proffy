import path from 'path';

interface IRequestDTO {
  email: string;
}

class SendForgotPasswordService {
  public async execute({ email }: IRequestDTO): Promise<void> {
    // Recebe o email
    // Verifica se esse email está cadastrado no banco de dados
    // Gera um token de renovação de senha
    // faz o envio do email
  }
}

export default SendForgotPasswordService;