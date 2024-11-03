import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {
	getDataSourceToken,
	getRepositoryToken,
	TypeOrmModule,
} from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { customUserRepository } from 'src/users/user.repository';
import { DataSource } from 'typeorm';
import { AtStrategy } from 'src/common/strategies';
import { JwtModule } from '@nestjs/jwt';

@Module({
	imports: [TypeOrmModule.forFeature([User]), JwtModule.register({})],
	controllers: [AuthController],
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
		AuthService,
		AtStrategy,
	],
})
export class AuthModule {}
