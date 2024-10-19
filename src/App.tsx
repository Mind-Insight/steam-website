import Main from "./components/MainPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Main></Main>}></Route>
				<Route
					path="privacy_policy"
					element={<PrivacyPolicy></PrivacyPolicy>}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
