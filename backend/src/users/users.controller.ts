import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	ParseIntPipe,
	Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaginationOptionsDto } from './dto/list-user.dto';

@ApiTags('Users')
@ApiBearerAuth('JWT-auth')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	@ApiOperation({
		summary: 'Create user',
	})
	create(@Body() createUserDto: CreateUserDto) {
		return this.usersService.create(createUserDto);
	}

	@Get()
	@ApiOperation({
		summary: 'List all users',
	})
	findAll(@Query() paginationOptions: PaginationOptionsDto) {
		return this.usersService.findAll(paginationOptions);
	}

	@Get(':id')
	@ApiOperation({
		summary: 'List user by id',
	})
	findOne(@Param('id', ParseIntPipe) id: number) {
		return this.usersService.findOne(id);
	}

	@Patch(':id')
	@ApiOperation({
		summary: 'Update self user',
	})
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateUserDto: UpdateUserDto,
	) {
		return this.usersService.update(id, updateUserDto);
	}

	@Patch(':id/change-status')
	@ApiOperation({
		summary: 'Activate or cancel user by id',
	})
	changeStatus(@Param('id', ParseIntPipe) id: number) {
		return this.usersService.changeStatus(id);
	}
}
