import { Controller, Get } from '@nestjs/common';
import { AcessLevelService } from './acess-level.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Access Level')
@ApiBearerAuth('JWT-auth')
@Controller('access-level')
export class AcessLevelController {
	constructor(private readonly acessLevelService: AcessLevelService) {}

	@Get()
	findAll() {
		return this.acessLevelService.findAll();
	}

	@Get('dashboard')
	getInfo() {
		return this.acessLevelService.getInfo();
	}
}
