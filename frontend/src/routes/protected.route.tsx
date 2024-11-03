import { Navigate } from "react-router-dom";

import { APP_ROUTES } from "./constants";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Loading } from "../components/Loading";
import MainLayout from "../components/MainLayout";

export function ProtectedRoute() {
	const { isAuthenticated, isLoading } = useContext(AuthContext);

	if (isAuthenticated && isLoading) {
		return <Loading />;
	}

	return !isAuthenticated ? (
		<Navigate to={`/${APP_ROUTES.SIGNIN.path}`} replace />
	) : (
		<MainLayout />
	);
}
