import { api } from "../apiClient";
import {
	AxiosGetAllUserResponse,
	AxiosGetUserResponse,
	IUser,
	PageProps,
} from "./types";

export const userService = {
	async getAllUsers(page: PageProps): Promise<AxiosGetAllUserResponse> {
		return api.get("users", {
			params: { page: page.page, offset: page.offset },
		});
	},

	async getUserById(id: number): Promise<AxiosGetUserResponse> {
		return api.get(`users/${id}`);
	},

	async changeUserStatus(id: number) {
		return api.patch(`users/${id}/change-status`);
	},

	async createUser(data: IUser) {
		return api.post("users", data);
	},

	async updateUser(id: number, data: IUser) {
		return api.patch(`users/${id}`, data);
	},
};
