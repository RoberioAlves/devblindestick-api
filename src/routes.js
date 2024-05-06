import { Router } from 'express'
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './App/controlles/UserController';
import SessionController from './App/controlles/SessionController';
import ProductController from './App/controlles/ProductController';

const routes = new Router()

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);
routes.post('products', upload.single('file'), ProductController.store);

export default routes