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
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{data?.length && (
						<>
							<Row>
								<PieChart data={data} />
							</Row>
							<Row>
								<BarChart data={data} />
							</Row>
						</>
					)}
				</Card>
			</Wrapper>
		</Content>
	);
}
