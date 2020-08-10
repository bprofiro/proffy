interface IRequestDTO {
  user_id: string;
}

class CreateConnectionService {
  public async execute({ user_id}: IRequestDTO): Promise<void> {
    // Recebe os dados para a conexão
    // Verifica se há alguém com o mesmo id
    // Cria a conexão
    // retorna um status de sucesso
    // return connection;
  }
}

export default CreateConnectionService;