interface IRequestDTO {
  email: string;
  password: string;
}

// interface IResponse {
//   user: User;
//   token: string;
// }

export default class AuthenticateUserService {
  public async execute({ email, password }: IRequestDTO): Promise<void> {
    // Recebe os dados para a autenticação
    // Verifica se há algum email cadastrado no banco de dados
    // Compara a senha recebida com o hash no banco de dados
    // Faz a validação do jwt
    // retorna o usuário e o token gerado
    // return { user, token };
  }
}