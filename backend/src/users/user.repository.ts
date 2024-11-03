import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

export interface UserRepository extends Repository<User> {
	this: Repository<User>;
	getUsers(): Promise<User[]>;
	getUser(id: number): Promise<User>;
}

export const customUserRepository: Pick<UserRepository, any> = {
	getUser(this: Repository<User>, id) {
		return this.findOne({
			where: { id },
			relations: {
				profiles: true,
			},
			select: {
				id: true,
				name: true,
				surname: true,
				email: true,
				status: true,
				profile_id: true,
			},
		});
	},
	getUsers(this: Repository<User>) {
		return this.find({
			relations: {
				profiles: true,
			},
			select: {
				id: true,
				name: true,
				surname: true,
				email: true,
				status: true,
				profile_id: true,
			},
			order: {
				name: 'asc',
			},
		});
	},
};
