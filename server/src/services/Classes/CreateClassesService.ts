interface IRequestDTO {
  user_id: string;
  subject: string;
  cost: string;
  schedule: string;
}

class CreateClassesService {
  public async execute({ user_id, subject, cost, schedule }: IRequestDTO): Promise<void> {
    // Recebe os dados para o cadastro
    // Verifica se há alguém com o mesmo id
    // Cria o usuário
    // retorna o usuário criado
    // return user;
  }
}

export default CreateClassesService;