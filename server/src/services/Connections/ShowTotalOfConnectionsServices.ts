import db from '../../database/connection';

class ShowTotalOfConnectionsService {
  public async execute(): Promise<Number | String> {
    const totalConnections = await db('connections').count('* as total');

    const { total } = totalConnections[0];

    return total;
  }
}

export default ShowTotalOfConnectionsService;