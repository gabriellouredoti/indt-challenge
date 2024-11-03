import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/users/entities/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AcessLevelService {
	constructor(
		@InjectRepository(Profile)
		private readonly profileRepository: Repository<Profile>,
	) {}
	async findAll() {
		return this.profileRepository.find({
			order: {
				id: 'asc',
			},
		});
	}

	async getInfo() {
		const profiles = await this.profileRepository.find({
			relations: {
				users: true,
			},
		});

		const result = profiles.map((profile) => {
			const count_active = profile.users.filter(
				(user) => user.status,
			).length;
			const count_canceled = profile.users.filter(
				(user) => !user.status,
			).length;

			return {
				profile_description: profile.description,
				count_active,
				count_canceled,
			};
		});

		return result;
	}
}
