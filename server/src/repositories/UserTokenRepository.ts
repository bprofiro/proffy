
class UserTokensRepository {
  public async findByToken(token: string): Promise<void | undefined> {
    // Recebe um token
    // Procura no banco de dados algum token igual ao recebido
    // retorna esse user
    // return userToken
  }

  public async generate(user_id: string): Promise<void> {
    // Recebe um id
    // Cria um token para esse user_id
    // Salva esse token no banco de dados
    // retorna o userToken
    // return userToken
  }
}

export default UserTokensRepository;