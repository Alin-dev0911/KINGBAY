import { Outlet } from "react-router-dom";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

import "../styles/Layout.css";

export default function MainLayout() {
	return (
		<div className="site-layout">
			<Navbar />

			<div className="site-page-content">
				<Outlet />
			</div>

			<Footer />
		</div>
	);
}
