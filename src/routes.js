import { Router } from 'express';
import HouseController from './controllers/HouseController';
import SessionController from './controllers/SessionController';
import DashboardController from './controllers/DashboardController';
import ReserveController from './controllers/ReserveController';
import multer from 'multer';
import uploadConfig from './config/upload';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/houses', upload.single('thumbnail'), HouseController.store);
routes.get('/houses', HouseController.index);
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update);
routes.post('/houses/:house_id/reserve', ReserveController.store);
routes.delete('/houses', HouseController.destroy);

routes.get('/dashboard', DashboardController.show);

routes.get('/reserves', ReserveController.index);
routes.delete('/reserves/cancel', ReserveController.destroy)

export default routes;