interface IRequestDTO {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequestDTO): Promise<void> {
    // Recebe os dados para o cadastro
    // Verifica se há alguém com o mesmo email
    // Faz a criptografia da senha
    // Cria o usuário
    // retorna o usuário criado
    // return user;
  }
}

export default CreateUserService;