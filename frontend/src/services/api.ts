import axios, { AxiosError } from "axios";
import { destroyCookie, parseCookies } from "nookies";

// import { signOut } from "../contexts/AuthContext";

const APP_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function setupAPIClient(ctx = undefined) {
	const cookies = parseCookies(ctx);

	const api = axios.create({
		baseURL: `${APP_BASE_URL}`,
		headers: {
			Authorization: `Bearer ${cookies["@indt.token"]}`,
		},
	});

	api.interceptors.response.use(
		(response) => {
			return response;
		},
		(error: AxiosError) => {
			if (error.response?.status === 401) {
				// qualquer erro 401 (nao autorizado) devemos deslogar o usuario
				destroyCookie(undefined, "@indt.token");
				window.location.href = "/";
			}

			return Promise.reject(error);
		}
	);

	return api;
}
