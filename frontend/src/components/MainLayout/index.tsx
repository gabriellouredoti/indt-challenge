import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import { AppCustomBar } from "../AppBar";

function MainLayout() {
	return (
		<div style={{ display: "flex" }}>
			<Sidebar />
			<AppCustomBar />
			<Outlet />
		</div>
	);
}

export default MainLayout;
