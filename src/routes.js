import { Router } from 'express'
import { v4 } from 'uuid' 
import User from './App/models/User'
const routes = new Router()

routes.get('/', async (request, response) => {
    const user = await User.create({
        id: v4(),
        name: 'Pedro7',
        email: 'Pedro7@gmail.com',
        password_hash: '12213443wdasd',
    });

    return response.status(201).json(user);
});

export default routes