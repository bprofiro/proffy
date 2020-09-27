import express from 'express';
import UsersController from './controllers/UsersController';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const usersController = new UsersController();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/users', usersController.create);

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);
routes.get('/classes/all', classesController.all);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;