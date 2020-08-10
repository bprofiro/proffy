interface IRequestDTO {
  user_id: string;
  avatarFilename: string;
}

export default class UpdateUserAvatarService {
  public async execute({
    user_id,
    avatarFilename,
  }: IRequestDTO): Promise<void> {
    // Recebe os dados novos
    // Verifica se o id informado existe
    // Verifica se já existe um avatar para esse usuário
    // Se existir um avatar, deletar esse avatar
    // Salvar o arquivo novo
    // Alterar o campo "avatar" para o novo avatar informado
    // salvar as mudanças
    // retornar o usuário atualizado
    // return user;
  }
}