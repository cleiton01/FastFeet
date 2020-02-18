import { Router } from 'express';

import SessionController from './controllers/sessionController';
import UserController from './controllers/UserController';
import DestinatarioController from './controllers/DestinatarioController';


const routers = Router();

//routers.post('/login',);
//routers.post('/logout',);
routers.post('/usuario', UserController.store);

routers.post('/destinatario', DestinatarioController.store);

//routers.use(SessionController);//


export default routers;