import { createContext, ReactNode, useState, useEffect } from "react";
import { destroyCookie, setCookie, parseCookies } from "nookies";

import { api } from "../services/apiClient";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

type AuthContextData = {
	user?: UserProps | null;
	isAuthenticated: boolean;
	signIn: (credentials: SignInProps) => Promise<void>;
	signOut: () => void;
	isLoading: boolean;
};

type UserProps = {
	id: number | string;
	name: string;
	surname: string;
	status: string;
	email: string;
	profiles: {
		id: number | string;
		description: string;
		slug: string;
	};
};

type SignInProps = {
	email: string;
	password: string;
};

type AuthProviderProps = {
	children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
	console.log("caiu");
	const [user, setUser] = useState<UserProps | null>();
	const isAuthenticated = !!user;
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	async function signOut() {
		try {
			destroyCookie(undefined, "@indt.token");
			setUser(null);
			toast.success("Logout realizado com sucesso!");
			navigate("/");
		} catch {
			toast.error("Erro ao realizar logout!");
		}
	}

	useEffect(() => {
		const { "@indt.token": token } = parseCookies();

		if (token) {
			setIsLoading(true);

			api.post("/auth/whoami")
				.then((response) => {
					const { id, name, surname, status, email, profiles } =
						response.data;
					setUser({
						id,
						name,
						email,
						surname,
						status,
						profiles: {
							id: profiles.id,
							description: profiles.description,
							slug: profiles.slug,
						},
					});
				})
				.catch(() => {
					signOut();
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, []);

	async function signIn({ email, password }: SignInProps) {
		await api
			.post("/auth", {
				email,
				password,
			})
			.then((response) => {
				const { id, name, email, surname, status, profiles, token } =
					response.data;

				setCookie(undefined, "@indt.token", token, {
					maxAge: 60 * 60 * 24 * 30,
					path: "/",
				});

				setUser({
					id,
					name,
					email,
					surname,
					status,
					profiles: {
						id: profiles.id,
						description: profiles.description,
						slug: profiles.slug,
					},
				});

				api.defaults.headers["authorization"] = `Bearer ${token}`;

				toast.success("Usuário logado com sucesso!");

				navigate("/home");
			})
			.catch((error) =>
				error?.response?.data?.errors
					? toast.error(error.response.data.errors[0])
					: toast.error(error.response.data.message)
			);
	}

	return (
		<AuthContext.Provider
			value={{ user, isAuthenticated, signIn, signOut, isLoading }}
		>
			{children}
		</AuthContext.Provider>
	);
}
