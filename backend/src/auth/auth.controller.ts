import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthDto } from './dto/auth.dto';
import { AuthToken, GetCurrentUser, Public } from 'src/common/decorators';
import { UserPayloadProps } from 'src/common/types';

@ApiTags('Authentication')
@ApiBearerAuth('JWT-auth')
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Public()
	@Post()
	@ApiOperation({
		summary: 'Authenticate',
	})
	signIn(@Body() authDto: AuthDto) {
		return this.authService.signIn(authDto);
	}

	@Post('whoami')
	@ApiOperation({
		summary: 'Get current user logged',
	})
	whoami(
		@GetCurrentUser() currentUser: UserPayloadProps,
		@AuthToken() token: string,
	) {
		return this.authService.whoami(currentUser, token);
	}
}
