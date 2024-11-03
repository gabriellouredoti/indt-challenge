import { useState } from "react";
import {
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
} from "@mui/material";
import {
	Menu as MenuIcon,
	Home as HomeIcon,
	People as PeopleIcon,
	Dashboard as DashboardIcon,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
	const [isOpen, setIsOpen] = useState(true);
	const location = useLocation();

	const toggleDrawer = () => {
		setIsOpen((prev) => !prev);
	};

	const isActiveRoute = (path: string) => location.pathname.includes(path);

	return (
		<Drawer
			variant="permanent"
			open={isOpen}
			sx={{
				width: isOpen ? 300 : 60,
				transition: "width 0.3s",
				"& .MuiDrawer-paper": {
					width: isOpen ? 300 : 60,
					transition: "width 0.3s",
					overflowX: "hidden",
					bgcolor: "#0c1c34",
				},
			}}
		>
			<IconButton
				onClick={toggleDrawer}
				sx={{ margin: "10px" }}
				style={{ width: "5vh", height: "5vh", color: "#fff" }}
			>
				<MenuIcon />
			</IconButton>
			<Divider />
			<List style={{ padding: "1vh", flex: 2, height: "100%" }}>
				<ListItem
					component={Link}
					to="/home"
					sx={{
						color: isActiveRoute("/home") ? "#000" : "#fff",
						backgroundColor: isActiveRoute("/home")
							? "#00AAC1"
							: "inherit",
					}}
					style={{
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
						borderRadius: "0.6vh",
						columnGap: 10,
					}}
				>
					<ListItemIcon
						style={{
							minWidth: 0,
							padding: 2,
						}}
					>
						<HomeIcon
							sx={{
								color: isActiveRoute("/home") ? "#000" : "#fff",
							}}
						/>
					</ListItemIcon>
					{isOpen && (
						<ListItemText style={{ padding: 2 }} primary="Home" />
					)}
				</ListItem>

				<ListItem
					component={Link}
					to="/users/list"
					sx={{
						color: "#fff",
						backgroundColor: isActiveRoute("/users")
							? "#00AAC1"
							: "inherit",
					}}
					style={{
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
						borderRadius: "0.6vh",
						columnGap: 10,
					}}
				>
					<ListItemIcon
						style={{
							minWidth: 0,
							padding: 2,
						}}
					>
						<PeopleIcon
							sx={{
								color: "#fff",
							}}
						/>
					</ListItemIcon>
					{isOpen && (
						<ListItemText
							style={{ padding: 2 }}
							primary="Gerenciamento de Usuários"
						/>
					)}
				</ListItem>

				<ListItem
					component={Link}
					to="/dashboard"
					sx={{
						color: "#fff",
						backgroundColor: isActiveRoute("/dashboard")
							? "#00AAC1"
							: "inherit",
					}}
					style={{
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
						borderRadius: "0.6vh",
						columnGap: 10,
					}}
				>
					<ListItemIcon
						style={{
							minWidth: 0,
							padding: 2,
						}}
					>
						<DashboardIcon
							sx={{
								color: "#fff",
							}}
						/>
					</ListItemIcon>
					{isOpen && (
						<ListItemText
							style={{ padding: 2 }}
							primary="Dashboard"
						/>
					)}
				</ListItem>
			</List>
		</Drawer>
	);
}

export default Sidebar;
