import { Profile } from 'src/users/entities/profile.entity';

export type UserProps = {
	id: number;
	name: string;
	email: string;
	profiles: Profile;
};

export type UserPayloadProps = {
	sub: string | number;
	email: string;
	user: UserProps;
};
