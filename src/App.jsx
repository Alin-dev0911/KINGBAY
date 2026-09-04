import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "./components/MainLayout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./page/Home.jsx";
import Story from "./page/Story.jsx";
import Products from "./page/Products.jsx";
import World from "./page/World";
import News from "./page/News.jsx";
import Contact from "./page/Contact";

export default function App() {
	return (
		<>
			<ScrollToTop />

			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/story" element={<Story />} />
					<Route path="/product" element={<Products />} />
					<Route path="/world" element={<World />} />
					<Route path="/news" element={<News />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Route>
			</Routes>
		</>
	);
}
