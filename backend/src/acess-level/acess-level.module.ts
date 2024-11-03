import { Module } from '@nestjs/common';
import { AcessLevelService } from './acess-level.service';
import { AcessLevelController } from './acess-level.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/users/entities/profile.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Profile])],
	controllers: [AcessLevelController],
	providers: [AcessLevelService],
})
export class AcessLevelModule {}
