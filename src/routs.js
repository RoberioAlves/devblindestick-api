import { Router } from 'express'
import { v4 } from 'uuid' 
import User from './App/models/User'
const routes = new Router()

routes.get('/', async (request, response) => {
    const user = await User.create({
        id: v4(),
        name: 'Pedro22',
        email: 'Pedro22@gmail.com',
        password_hash: 'wwqewqeewr3242',
    });

    return response.status(201).json(user);
});

export default routes