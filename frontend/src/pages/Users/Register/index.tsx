import {
	Button,
	Content,
	Label,
	LoginBox,
	Row,
	Card,
	Wrapper,
} from "../../../components/global";

import Grid from "@mui/material/Grid2";
import { useNavigate, useParams } from "react-router-dom";
import { APP_ROUTES } from "../../../routes/constants";
import { useForm } from "react-hook-form";
import { formRegisterUserType, schemaRegisterUser } from "./utils/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../services/apiClient";
import DefaultInput from "../../../components/Input";
import { Divider } from "@mui/material";
import CustomSelect from "../../../components/Select";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import { userService } from "../../../services/users";

export function CreateUser() {
	const navigate = useNavigate();
	const { id } = useParams<{ id?: string }>();

	const { register, handleSubmit, formState, setValue, watch } =
		useForm<formRegisterUserType>({
			resolver: zodResolver(schemaRegisterUser),
			mode: "all",
		});

	const navigationGoBack = () =>
		navigate(`/${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.LIST.path}`);

	const { data: dataLevel } = useQuery({
		queryKey: ["access-level"],
		queryFn: () => api.get("access-level"),
		select: (data) => data.data || [],
	});

	useQuery({
		queryKey: ["user", id],
		queryFn: () =>
			id ? userService.getUserById(+id) : Promise.resolve(null),
		select: (data) => data?.data,
		enabled: !!id,
		onSuccess: (data) => {
			if (data) {
				setValue("name", data.name);
				setValue("surname", data.surname);
				setValue("email", data.email);
				setValue("profile_id", data?.profiles.id);
			}
		},
		onError: () => {
			toast.error("Usuário não encontrado");
			navigationGoBack();
		},
	});

	const onSubmit = (data: formRegisterUserType) => {
		const request = id
			? userService.updateUser(+id, data)
			: userService.createUser(data);

		request
			.then((response) => {
				toast.success(response.data.message);
				navigationGoBack();
			})
			.catch((error) =>
				error?.response?.data?.errors
					? toast.error(error.response.data.errors[0])
					: toast.error(error.response.data.message)
			);
	};

	return (
		<Content style={{ backgroundColor: "#fff", padding: "4vh" }}>
			<Wrapper>
				<Row style={{ paddingLeft: 0, paddingRight: 0 }}>
					<Label style={{ color: "#000", fontSize: "1.5vw" }}>
						{id ? "Editar Usuário" : "Cadastrar Usuário"}
					</Label>
				</Row>
				<Card style={{ justifyContent: "flex-start", height: "auto" }}>
					<LoginBox
						style={{
							width: "100%",
							padding: "2vw",
							backgroundColor: "transparent",
						}}
						onSubmit={handleSubmit(onSubmit)}
					>
						<Grid container spacing={2} width={"100%"}>
							<Grid
								size={12}
								rowGap={1}
								display={"flex"}
								flexDirection={"column"}
							>
								<Label
									style={{ fontSize: "0.6vw", color: "#000" }}
								>
									Dados do usuário
								</Label>
								<Divider />
							</Grid>
							<Grid size={6}>
								<DefaultInput
									id="name"
									label="Nome"
									variant="filled"
									fullWidth
									register={{ ...register("name") }}
									error={formState.errors.name?.message}
								/>
							</Grid>
							<Grid size={6}>
								<DefaultInput
									id="surname"
									label="Sobrenome"
									variant="filled"
									fullWidth
									register={{ ...register("surname") }}
									error={formState.errors.surname?.message}
								/>
							</Grid>
							<Grid size={6}>
								<DefaultInput
									id="email"
									label="E-mail"
									variant="filled"
									fullWidth
									register={{ ...register("email") }}
									error={formState.errors.email?.message}
								/>
							</Grid>
							<Grid size={6}>
								<CustomSelect
									options={dataLevel}
									register={register("profile_id")}
									value={+watch("profile_id")}
									error={formState.errors.profile_id}
									onChange={(
										e: React.ChangeEvent<HTMLInputElement>
									) => setValue("profile_id", e.target.value)}
								/>
							</Grid>

							<Grid container size={12}>
								<Grid
									size={12}
									rowGap={1}
									display={"flex"}
									flexDirection={"column"}
								>
									<Label
										style={{
											fontSize: "0.6vw",
											color: "#000",
										}}
									>
										Dados de acesso
									</Label>
									<Divider />
								</Grid>
								<Grid size={6}>
									<DefaultInput
										id="password"
										label="Senha"
										variant="filled"
										fullWidth
										type="password"
										register={{
											...register("password"),
										}}
										error={
											formState.errors.password?.message
										}
									/>
								</Grid>
								<Grid size={6}>
									<DefaultInput
										id="confirmPassword"
										label="Confirmação de Senha"
										variant="filled"
										fullWidth
										type="password"
										register={{
											...register("confirmPassword"),
										}}
										error={
											formState.errors.confirmPassword
												?.message
										}
									/>
								</Grid>
							</Grid>

							<Grid
								size={12}
								alignItems={"center"}
								justifyContent={"flex-end"}
								display={"flex"}
								columnGap={2}
							>
								<Button
									style={{
										width: "auto",
										color: "#000",
										backgroundColor: "#fff",
										border: "1px solid #000",
									}}
									onClick={navigationGoBack}
								>
									Cancelar
								</Button>
								<Button
									style={{ width: "auto" }}
									disabled={!formState.isValid}
								>
									{id ? "Atualizar" : "Cadastrar"}
								</Button>
							</Grid>
						</Grid>
					</LoginBox>
				</Card>
			</Wrapper>
		</Content>
	);
}
