interface IRequestDTO {
  class_id: string;
  subject: string;
  cost: string;
  schedule: string;
}

class UpdateClassesService {
  public async execute({ class_id, subject, cost, schedule }: IRequestDTO): Promise<void> {
    // Recebe os dados para a atualização
    // Verifica se há alguma aula com o mesmo id
    // Cria atualiza a aula
    // retorna a aula atualizada
    // return class;
  }
}

export default UpdateClassesService;