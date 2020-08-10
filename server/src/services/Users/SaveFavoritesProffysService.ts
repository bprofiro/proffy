interface IRequestDTO {
  class_id: string;
  user_id: string;
}

class SaveFavoritesProffysService {
  public async execute({ class_id, user_id }: IRequestDTO): Promise<void> {
    // Recebe os dados para o cadastro
    // Verifica se há alguém com o mesmo id
    // Resgata o id do proffy usando o class_id
    // Inserir esse proffy na base de dados do user_id
    // retorna a conexão criada
    // return user;
  }
}

export default SaveFavoritesProffysService;