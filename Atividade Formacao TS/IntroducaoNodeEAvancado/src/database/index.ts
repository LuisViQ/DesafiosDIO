import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/db.sqlite",

    // 👇 REGISTRA AS ENTIDADES
    entities: [User],

    // 👇 SEUS CAMINHOS DAS MIGRATIONS
    migrations: ["src/database/migrations/*.ts"],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source Initialize");
    })
    .catch((error) => {
        console.log(error);
    });
