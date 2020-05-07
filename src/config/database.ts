import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
// const connectionString = `postgres://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@127.0.0.1:5432/users`;
// export const sequelize = new Sequelize(connectionString);
console.log(process.env.DB_ADMIN, process.env.DB_PASSWORD);
export const sequelize = new Sequelize('postgres', process.env.DB_ADMIN, process.env.DB_PASSWORD, {
	host: 'localhost',
	dialect: 'postgres',
});
