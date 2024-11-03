export interface Profile {
	id?: number;
	description?: string;
	slug?: string;
}

export interface IUser {
	id?: number;
	name: string;
	surname: string;
	email: string;
	status?: number | string;
	profile_id?: number | string;
	profiles?: Profile | any;
}

export interface UserResponse {
	items: IUser[];
	meta: {
		totalItems: number;
		itemCount: number;
		itemsPerPage: number;
		totalPages: number;
		currentPage: number;
	};
}

export interface AxiosGetAllUserResponse {
	data: UserResponse;
}

export interface AxiosGetUserResponse {
	data: IUser;
}

export type PageProps = {
	page: number;
	offset?: number;
};
