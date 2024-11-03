import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { PaginationOptionsDto } from './dto/list-user.dto';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User) private readonly userRepository: UserRepository,
	) {}

	async create(createUserDto: CreateUserDto) {
		const isUserExisting = await this.userRepository.findOne({
			where: { email: createUserDto.email },
		});

		if (isUserExisting)
			throw new BadRequestException({
				message: 'E-mail de usuário já cadastrado!',
			});

		const user = new User();

		user.name = createUserDto.name;
		user.surname = createUserDto.surname;
		user.email = createUserDto.email;
		user.password = createUserDto.password;
		user.profile_id = createUserDto.profile_id;

		const { id, name, email } = await this.userRepository.save(user);

		return {
			data: { id, name, email },
			message: 'Usuário criado com sucesso.',
		};
	}

	async findAll(
		paginationOptions: PaginationOptionsDto,
	): Promise<Pagination<User>> {
		const options = {
			page: +paginationOptions.page,
			limit: +paginationOptions.offset,
		};
		return paginate<User>(this.userRepository, options, {
			select: {
				id: true,
				name: true,
				surname: true,
				email: true,
				status: true,
			},
			relations: {
				profiles: true,
			},
			order: {
				name: 'asc',
			},
		});
	}

	async findOne(id: number) {
		return this.userRepository.getUser(id);
	}

	async update(id: number, updateUserDto: UpdateUserDto) {
		const user = await this.userRepository.getUser(id);

		if (!user)
			throw new BadRequestException({
				message: 'Usuário não encontrado!',
			});

		const isUserExisting = await this.userRepository.findOne({
			where: { email: updateUserDto.email },
		});

		if (isUserExisting && user.id != isUserExisting.id)
			throw new BadRequestException({
				message: 'E-mail de usuário já cadastrado!',
			});

		user.name = updateUserDto.name;
		user.surname = updateUserDto.surname;
		user.email = updateUserDto.email;
		user.profile_id = updateUserDto.profile_id;

		const {
			id: userId,
			name,
			surname,
			email,
		} = await this.userRepository.save(user);

		return {
			data: { userId, name, surname, email },
			message: 'Alterações salvas com sucesso!',
		};
	}

	async changeStatus(id: number) {
		const user = await this.userRepository.getUser(id);

		if (!user)
			throw new BadRequestException({
				message: 'Usuário não encontrado!',
			});

		user.status = user.status ? 0 : 1;

		await this.userRepository.save(user);

		return {
			message: user.status
				? 'Usuário ativado com sucesso.'
				: 'Usuário cancelado com sucesso.',
		};
	}
}
