import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./contexts/AuthContext";
import { Router } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme/global/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/global";
import ToastContainer from "./components/Toast";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<ToastContainer />
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<AuthProvider>
						<Router />
					</AuthProvider>
				</ThemeProvider>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
