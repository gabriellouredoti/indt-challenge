import React, { useState } from "react";
import {
	useReactTable,
	ColumnDef,
	flexRender,
	getCoreRowModel,
} from "@tanstack/react-table";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	IconButton,
} from "@mui/material";

import {
	ArrowBackIos,
	ArrowForwardIos,
	Edit,
	Reorder,
} from "@mui/icons-material";
import { User, UserTableProps } from "./types";

const UserTable: React.FC<UserTableProps> = ({
	users,
	totalRecords,
	onToggleStatus,
	onEdit,
	onView,
	onPageChange,
	totalPages,
	activateActions,
}) => {
	const [currentPage, setCurrentPage] = useState(1);

	const columns = React.useMemo<ColumnDef<User>[]>(
		() => [
			{
				accessorKey: "id",
				header: "ID",
			},
			{
				accessorKey: "name",
				header: "Nome",
			},
			{
				accessorKey: "surname",
				header: "Sobrenome",
			},
			{
				accessorKey: "email",
				header: "Email",
			},
			{
				accessorKey: "profile_name",
				header: "Nível de Acesso",
			},
			{
				accessorKey: "status",
				header: "Status",
				cell: ({ row }) =>
					row.getValue("status") === 1 ? "Ativo" : "Cancelado",
			},
			{
				...(activateActions
					? {
							id: "actions",
							header: "Ações",
							cell: ({ row }) => (
								<div>
									<button
										onClick={() =>
											onToggleStatus(row.getValue("id"))
										}
										style={{
											padding: "0.3vw",
											color: "#fff",
											backgroundColor: "#0c1c34",
											border: "none",
											borderRadius: "0.2vw",
											width: "10vh",
										}}
									>
										{row.getValue("status") === 1
											? "Cancelar"
											: "Ativar"}
									</button>

									<IconButton
										onClick={() =>
											onEdit(row.getValue("id"))
										}
										style={{ marginLeft: "8px" }}
									>
										<Edit />
									</IconButton>
									{onView && (
										<IconButton
											onClick={() =>
												onView(row.getValue("id"))
											}
											style={{ marginLeft: "8px" }}
										>
											<Reorder />
										</IconButton>
									)}
								</div>
							),
					  }
					: { accessorFn: "", accessorKey: "-" }),
			},
		],
		[]
	);

	const table = useReactTable({
		data: users,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
		onPageChange(newPage);
	};

	return (
		<div style={{ width: "100%" }}>
			<TableContainer component={Paper}>
				<Table>
					<TableHead sx={{ bgcolor: "#0c1c34" }}>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableCell
										key={header.id}
										style={{
											color: "#fff",
											fontWeight: "600",
											fontSize: "0.8vw",
										}}
									>
										{flexRender(
											header.column.columnDef.header,
											header.getContext()
										)}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableHead>
					<TableBody>
						{table.getRowModel().rows.map((row) => (
							<TableRow key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>
										{flexRender(
											cell.column.columnDef.cell,
											cell.getContext()
										)}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-end",
					width: "100%",
					columnGap: 10,
					marginTop: "0.6vw",
				}}
			>
				<IconButton
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
					style={{
						color: currentPage === 1 ? "#ccc" : "#0c1c34",
						cursor: currentPage === 1 ? "not-allowed" : "pointer",
					}}
					onMouseEnter={(e) => {
						if (currentPage !== 1) {
							e.currentTarget.style.color = "#0c1c34";
						}
					}}
					onMouseLeave={(e) => {
						if (currentPage !== 1) {
							e.currentTarget.style.color = "#0c1c34";
						}
					}}
				>
					<ArrowBackIos fontSize="small" />
				</IconButton>
				<span
					style={{
						fontWeight: "bold",
						fontSize: "0.6vw",
						color: "#333",
					}}
				>
					Página {currentPage} de {totalPages} | Total de registros:{" "}
					{totalRecords}
				</span>
				<IconButton
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					style={{
						color: currentPage === totalPages ? "#ccc" : "#0c1c34",
						cursor:
							currentPage === totalPages
								? "not-allowed"
								: "pointer",
					}}
					onMouseEnter={(e) => {
						if (currentPage !== totalPages) {
							e.currentTarget.style.color = "#0c1c34";
						}
					}}
					onMouseLeave={(e) => {
						if (currentPage !== totalPages) {
							e.currentTarget.style.color = "#0c1c34";
						}
					}}
				>
					<ArrowForwardIos fontSize="small" />
				</IconButton>
			</div>
		</div>
	);
};

export default UserTable;
