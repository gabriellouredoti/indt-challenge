import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import { Home } from "../pages/Home";

import { ProtectedRoute } from "./protected.route";
import { PublicRoute } from "./public.route";

import { APP_ROUTES } from "./constants";
import { Users } from "../pages/Users";
import { CreateUser } from "../pages/Users/Register";
import { Dashboard } from "../pages/Dashboard";

export function Router() {
	return (
		<Routes>
			<Route element={<ProtectedRoute />}>
				<Route path={APP_ROUTES.HOME.path} element={<Home />} />

				<Route path={APP_ROUTES.USERS.path} element={<Outlet />}>
					<Route
						path={APP_ROUTES.USERS.LIST.path}
						element={<Users />}
					/>
					<Route
						path={APP_ROUTES.USERS.REGISTER.path}
						element={<CreateUser />}
					/>
					<Route
						path={`${APP_ROUTES.USERS.EDIT.path}/:id`}
						element={<CreateUser />}
					/>
				</Route>

				<Route
					path={APP_ROUTES.DASHBOARD.path}
					element={<Dashboard />}
				/>
			</Route>
			<Route
				path="*"
				element={<Navigate to={`/${APP_ROUTES.SIGNIN.path}`} />}
			/>
			<Route
				path="/"
				element={<Navigate to={`/${APP_ROUTES.SIGNIN.path}`} />}
			/>
			<Route
				path={APP_ROUTES.SIGNIN.path}
				element={
					<PublicRoute>
						<Login />
					</PublicRoute>
				}
			/>
		</Routes>
	);
}
