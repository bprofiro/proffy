import db from '../../database/connection';

class CreateConnectionService {
  public async execute(user_id: number): Promise<void> {
    await db('connections').insert({
      user_id,
    });
  }
}

export default CreateConnectionService;