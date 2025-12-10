import { EntityManager } from "typeorm";
import { AppDataSource } from "../database";
import { User } from "../entities/User";
import { promises } from "dns";

export class UserRepository{
    private manager: EntityManager

    constructor(
        manager = AppDataSource.manager
    ) {
        this.manager = manager
    }

    createUser = async (user:User) => {
        return this.manager.save(user)
    }
    getUser = async(id_user: string):Promise<User | null> => {
        return this.manager.findOne(User, {
            where:{
                user_id: userId
            }
        })
    }
}