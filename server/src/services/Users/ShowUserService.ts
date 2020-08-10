interface IRequestDTO {
  user_id: string;
}

export default class ShowUserService {
  public async execute({ user_id }: IRequestDTO): Promise<void> {
    // Recebe o id do usuário
    // Verifica se há um usuário com esse id cadastrado no banco
    // Retorna os dados desse usuário
    // return user;
  }
}