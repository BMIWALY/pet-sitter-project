import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import dotenv from "dotenv";
dotenv.config();



export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.HOST,
    port: parseInt(process.env.POST),
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})


