import { Router } from 'express';
import HouseController from './controllers/HouseController';
import SessionController from './controllers/SessionController';

const routes = new Router();

routes.get('/', SessionController.index);
routes.post('/sessions', SessionController.store);
routes.post('/houses', HouseController.store);

export default routes;