interface IRequestDTO {
  class_id: string;
}

class DeleteClassesService {
  public async execute({ class_id }: IRequestDTO): Promise<void> {
    // Recebe os dados para o cadastro
    // Verifica se há alguém com o mesmo id
    // Deleta a aula
    // retorna sucesso
  }
}

export default DeleteClassesService;