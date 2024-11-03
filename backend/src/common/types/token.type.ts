import { UserProps } from './user.type';

export type Tokens = {
	token: string;
	user?: UserProps;
	message?: string;
};
