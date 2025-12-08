import { Request, Response } from "express";
import { UserSevice } from "../services/UserSevice";

const userService = new UserSevice();

export class UserController {
    
    createUser = (request: Request, response: Response) => {
        const user = request.body;

        if (!user.name) {
            return response
                .status(400)
                .json({ message: 'Bad request! Name is not to be null' });
        }
        if (!user.email) {
            return response
                .status(400)
                .json({ message: 'Bad request! Email is not to be null' });
        }

        userService.createUser(user.name, user.email);
        return response.status(201).json({ message: 'DioBank' });
    };

    getAllUsers = (request: Request, response: Response) => {
        const users = userService.getAllUsers();
        return response.status(200).json(users);
    };
    deleteUsers = (request: Request, response: Response) => {
        const user = request.body
        console.log('Deletando usuario:', user.name)
        return response.status(200).json({ message: 'Deletado'})
    }
}
