import { useQuery } from "react-query";
import { Content, Row, Label, Card, Wrapper } from "../../components/global";
import { api } from "../../services/apiClient";
import PieChart from "./components/Charts/PieChart";
import BarChart from "./components/Charts/BarChart";

export function Dashboard() {
	const { data } = useQuery({
		queryKey: ["access_level"],
		queryFn: () => api.get("access-level/dashboard"),
		select(data) {
			return data?.data;
		},
	});

	return (
		<Content style={{ backgroundColor: "#fff", padding: "4vh" }}>
			<Wrapper>
				<Row style={{ paddingLeft: 0, paddingRight: 0 }}>
					<Label style={{ color: "#000", fontSize: "1.5vw" }}>
						Dashboard
					</Label>
				</Row>
				<Card
					style={{
						width: "100%",
						height: "auto",
						flexDirection: "row",
						alignItems: "flex-end",
						justifyContent: "center",
					}}
				>
					{data?.length && (
						<>
							<Row>
								<PieChart data={data} />
								<Label
									style={{
										fontSize: "0.8vw",
										color: "#000",
										textAlign: "center",
										paddingTop: "2vh",
									}}
								>
									Percentual de usuários ativos e cancelados
									por perfil
								</Label>
							</Row>
							<Row>
								<BarChart data={data} />
								<Label
									style={{
										fontSize: "0.8vw",
										color: "#000",
										textAlign: "center",
									}}
								>
									Ranking de usuários ativos e cancelados por
									perfil
								</Label>
							</Row>
						</>
					)}
				</Card>
			</Wrapper>
		</Content>
	);
}
