import { Router } from 'express'
import UserController from './App/controlles/UserController';
import SessionController from './App/controlles/SessionController';

const routes = new Router()

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store)

export default routes