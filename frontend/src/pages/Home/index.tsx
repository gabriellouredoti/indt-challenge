import { Content, Row, Label, Wrapper } from "../../components/global";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import Logo from "../../assets/home.svg";

export function Home() {
	const { user } = useContext(AuthContext);

	return (
		<Content style={{ backgroundColor: "#fff", padding: "4vh" }}>
			<Wrapper>
				<Row style={{ paddingLeft: 0, paddingRight: 0, rowGap: 10 }}>
					<Label style={{ color: "#000", fontSize: "1.5vw" }}>
						Bem-vindo(a) - {user?.name}
					</Label>
					<Label style={{ color: "#000", fontSize: "1vw" }}>
						Gerencie de forma fácil e prática os seus usuários.
					</Label>
				</Row>
				<Row style={{ height: "100%" }}>
					<img
						src={Logo}
						style={{
							width: "30%",
						}}
					/>
				</Row>
			</Wrapper>
		</Content>
	);
}
