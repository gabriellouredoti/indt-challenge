import { DataSource } from 'typeorm';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
	imports: [],
	providers: [
		{
			provide: DataSource,
			inject: [],
			useFactory: async () => {
				try {
					const dataSource = new DataSource({
						type: 'postgres',
						host: process.env.DB_HOSTNAME,
						port: Number(process.env.DB_PORT),
						username: process.env.DB_USERNAME,
						password: process.env.DB_PASSWORD,
						database: process.env.DB_SCHEMA,
						synchronize: false,
						entities: [`${__dirname}/../**/**.entity{.ts,.js}`],
						logging: false,
						migrationsRun: false,
						migrationsTableName: 'typeorm_migrations',
					});

					await dataSource.initialize();

					return dataSource;
				} catch (error) {
					console.log('Error connecting to database!');
					throw error;
				}
			},
		},
	],
	exports: [DataSource],
})
export class TypeOrmModule {}
