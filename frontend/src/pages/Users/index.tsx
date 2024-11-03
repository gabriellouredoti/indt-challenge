import { Button, Content, Label, Row } from "../Login/styles";
import { Card, Wrapper } from "./styles";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../routes/constants";
import UserTable from "../../components/Datatable";
import { api } from "../../services/apiClient";
import { useQuery } from "react-query";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthContext";

export function Users() {
	const navigate = useNavigate();
	const { user } = useContext(AuthContext);

	const [page, setPage] = useState(1);
	const offset = 4;

	const canActivateActions = user?.profiles?.slug == "admin";

	const { data, isLoading, refetch } = useQuery({
		queryKey: ["userData", page],
		queryFn: async () => api.get("users", { params: { page, offset } }),
		select(data) {
			return {
				items: data.data.items.map((item: any) => ({
					...item,
					profile_name: item.profiles.description,
				})),
				meta: data.data.meta,
			};
		},
	});

	const handleToggleStatus = (userId: number) => {
		api.patch(`users/${userId}/change-status`)
			.then((response) => {
				toast.success(response?.data?.message);
				refetch();
			})
			.catch((error) =>
				error?.response?.data?.errors
					? toast.error(error.response.data.errors[0])
					: toast.error(error.response.data.message)
			);
	};

	const handleEdit = (userId: number) =>
		navigate(
			`/${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.EDIT.path}/${userId}`
		);

	return (
		<Content style={{ backgroundColor: "#fff", padding: "4vh" }}>
			<Wrapper>
				<Row style={{ paddingLeft: 0, paddingRight: 0 }}>
					<Label style={{ color: "#000", fontSize: "1.5vw" }}>
						Gerenciamento de usuários
					</Label>
				</Row>
				{canActivateActions && (
					<Row
						style={{
							alignItems: "flex-end",
							paddingLeft: 0,
							paddingRight: 0,
						}}
					>
						<Button
							style={{ width: "auto" }}
							onClick={() =>
								navigate(
									`/${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.REGISTER.path}`
								)
							}
						>
							<Add />
							Cadastrar Usuário
						</Button>
					</Row>
				)}

				{data?.items.length && !isLoading ? (
					<UserTable
						users={data?.items}
						onToggleStatus={handleToggleStatus}
						onEdit={handleEdit}
						totalRecords={data?.meta?.totalItems}
						totalPages={data?.meta?.totalPages}
						onPageChange={setPage}
						offset={offset}
						activateActions={canActivateActions}
					/>
				) : (
					<Card style={{ padding: "1vw" }}>
						<Row style={{ rowGap: 10 }}>
							<Label
								style={{
									color: "#000",
									fontSize: "1vw",
									width: "auto",
								}}
							>
								Nenhum Usuário Registrado
							</Label>
							<Label
								style={{
									color: "#000",
									fontSize: "0.8vw",
									width: "auto",
									fontWeight: "normal",
								}}
							>
								Clique em "Cadastrar Usuário" para começar a
								cadastrar.
							</Label>
						</Row>
					</Card>
				)}
			</Wrapper>
		</Content>
	);
}
