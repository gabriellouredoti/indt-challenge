import {
	AppBar,
	Avatar,
	Box,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function AppCustomBar() {
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const { user, signOut } = useContext(AuthContext);

	return (
		<AppBar
			position="absolute"
			style={{ height: "auto" }}
			elevation={1}
			color="transparent"
		>
			<Toolbar
				disableGutters
				style={{ justifyContent: "flex-end", paddingRight: "2vh" }}
			>
				<Box sx={{ flexGrow: 0 }}>
					<Tooltip title="Open settings">
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar
								alt={user?.name}
								src="/static/images/avatar/2.jpg"
							/>
						</IconButton>
					</Tooltip>
					<Menu
						sx={{ mt: "45px" }}
						id="menu-appbar"
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
					>
						<MenuItem onClick={signOut}>
							<Typography sx={{ textAlign: "center" }}>
								Sair
							</Typography>
						</MenuItem>
					</Menu>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
