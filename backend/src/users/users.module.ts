import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {
	getDataSourceToken,
	getRepositoryToken,
	TypeOrmModule,
} from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DataSource } from 'typeorm';
import { customUserRepository } from './user.repository';

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	controllers: [UsersController],
	providers: [
		{
			provide: getRepositoryToken(User),
			inject: [getDataSourceToken()],
			useFactory(datasource: DataSource) {
				return datasource
					.getRepository(User)
					.extend(customUserRepository);
			},
		},
		UsersService,
	],
})
export class UsersModule {}
