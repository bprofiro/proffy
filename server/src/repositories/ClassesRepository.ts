
class ClassesRepository {
  public async findById(id: string): Promise<void | undefined> {
    // Encontra uma aula pelo seu id
    // retorna a aula encontrado
    // return class
  }

  public async findUserByClassId(class_id: string): Promise<void | undefined> {
    // Recebe o id de uma aula
    // resgata a aula com esse id
    // Resgata o usuário que cadastrou essa aula
    // retorna o usuário encontrado
    // return user
  }

  public async create(classData: ICreateClassDTO): Promise<void> {
    // Cria a aula com os dados recebidos
    // Salva a aula no banco de dados
    // retorna a aula criado
    // return aula
  }

  public async delete(class: Class): Promise<void> {
    // Recebe a aula a ser deletado no banco de dados
    // Retorna esse aula
    // return delete(class);
  }

  public async save(class: Class): Promise<void> {
    // Recebe a aula a ser salvo no banco de dados
    // Retorna esse aula
    // return save(class);
  }
}

export default ClassesRepository;