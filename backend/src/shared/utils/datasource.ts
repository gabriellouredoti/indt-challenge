import { DataSource } from 'typeorm';
import { join } from 'path';

import { config } from 'dotenv';
config();

export const connectionSource = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOSTNAME,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_SCHEMA,
	synchronize: false,
	logging: true,
	entities: [__dirname + '/../**/*.entity{.ts,.js}'],
	migrations: [
		join(__dirname, '/../../', 'database/migrations/**/*{.ts,.js}'),
	],
	migrationsTableName: 'typeorm_migrations',
	migrationsRun: false,
});
