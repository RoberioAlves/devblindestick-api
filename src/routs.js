import { Router } from 'express'
import { v4 } from 'uuid' 
import User from './App/models/User'
const routes = new Router()

routes.get('/', async (request, response) => {
    const user = await User.create({
        id: v4(),
        name: 'Roberio2',
        emai: 'roberio2@email.com',
        password_hash: '12345678',
    });
    
    return response.status(201).json(user);
});

export default routes