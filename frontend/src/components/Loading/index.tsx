import { CircularProgress } from "@mui/material";
import { Content } from "../../components/global";

export function Loading() {
	return (
		<Content>
			<CircularProgress
				variant="determinate"
				sx={{
					color: "#dddddd",
				}}
				size={100}
				thickness={6}
				value={100}
			/>
		</Content>
	);
}
