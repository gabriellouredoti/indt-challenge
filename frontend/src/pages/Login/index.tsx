import {
	Button,
	Content,
	Label,
	LoginBox,
	Row,
	Subtitle,
} from "../../components/global";
import { useForm } from "react-hook-form";
import { formRecoveryPasswordType, schemaLogin } from "./utils/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import DefaultInput from "../../components/Input";

export function Login() {
	const { register, handleSubmit, formState } =
		useForm<formRecoveryPasswordType>({
			resolver: zodResolver(schemaLogin),
			mode: "all",
		});

	const { signIn } = useContext(AuthContext);

	const onSubmit = (data: formRecoveryPasswordType) =>
		signIn({ email: data.email, password: data.password });

	return (
		<Content style={{ margin: 0 }}>
			<LoginBox onSubmit={handleSubmit(onSubmit)}>
				<Row style={{ rowGap: "2vh" }}>
					<Label>Bem-vindo!</Label>
					<Subtitle>Entre com a sua conta</Subtitle>
				</Row>
				<Row>
					<DefaultInput
						id="filled-basic"
						label="E-mail"
						variant="filled"
						fullWidth
						register={{ ...register("email") }}
						error={formState.errors.email?.message}
					/>
				</Row>
				<Row>
					<DefaultInput
						id="filled-basic"
						label="Senha"
						variant="filled"
						fullWidth
						type="password"
						register={{ ...register("password") }}
						error={formState.errors.password?.message}
					/>
				</Row>
				<Row>
					<Button disabled={!formState.isValid}>Entrar</Button>
				</Row>
			</LoginBox>
		</Content>
	);
}
