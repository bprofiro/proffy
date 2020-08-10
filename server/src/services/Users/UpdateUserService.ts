interface IRequestDTO {
  user_id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}

export default class UpdateProfileService {
  public async execute({
    user_id,
    name,
    email,
    password,
    old_password,
  }: IRequestDTO): Promise<void> {
    // Recebe os dados para a atualização
    // Verifica se há algum usuário com esse id cadastrado no banco de dados
    // Verifica se o email novo já foi cadastrado no banco de dados
    // Atualiza os novos dados
    // Salva eles no banco de dados
    // retorna o usuário atualizado
    // return this.usersRepository.save(user);
  }
}