import express from 'express';
import axios from 'axios';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/dev', async (request, response) => {
  const { github_username } = request.body;

  const user = await axios.get(`https://api.github.com/users/${github_username}`);
  
  const { name, avatar_url, bio } = user.data;
  console.log(name, avatar_url, bio)
  return response.json({ message: 'oi'});
});

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;