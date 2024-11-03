import { Navigate } from "react-router-dom";
import { APP_ROUTES } from "./constants";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Loading } from "../components/Loading";

export function PublicRoute({ children }: { children: JSX.Element }) {
	const { isAuthenticated, isLoading } = useContext(AuthContext);

	if (!isAuthenticated && isLoading) {
		return <Loading />;
	}

	return !isAuthenticated ? (
		children
	) : (
		<Navigate to={`/${APP_ROUTES.HOME.path}`} />
	);
}
