
class UsersRepository {
  public async findById(id: string): Promise<void | undefined> {
    // Encontra um usuário pelo seu id
    // retorna o usuário encontrado
    // return user
  }

  public async findByEmail(email: string): Promise<void | undefined> {
    // Encontra um usuário pelo seu email
    // retorna o usuário encontrado
    // return user
  }

  public async create(userData: ICreateUserDTO): Promise<void> {
    // Cria o usuário com os dados recebidos
    // Salva o usuário no banco de dados
    // retorna o usuário criado
    // return user
  }

  public async favorite(userData: ICreateUserDTO): Promise<void> {
    // Cria o usuário com os dados recebidos
    // Salva o usuário no banco de dados
    // retorna o usuário criado
    // return user
  }

  public async save(user: User): Promise<User> {
    // Recebe o usuário a ser salvo no banco de dados
    // Retorna esse usuário
    // return this.ormRepository.save(user);
  }
}

export default UsersRepository;