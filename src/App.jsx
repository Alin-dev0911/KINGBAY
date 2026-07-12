import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "./components/MainLayout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./page/Home.jsx";
import Story from "./page/Story.jsx";

export default function App() {
	return (
		<>
			<ScrollToTop />

			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/story" element={<Story />} />

					<Route path="*" element={<Navigate to="/" replace />} />
				</Route>
			</Routes>
		</>
	);
}
