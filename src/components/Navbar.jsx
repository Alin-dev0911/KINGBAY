import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setMenuOpen(false);
	}, [location.pathname, location.hash]);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";

		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const navigation = [
		{
			label: "Trang chủ",
			to: "/#home",
		},
		{
			label: "Câu chuyện",
			to: "/story",
		},
		{
			label: "Sản phẩm",
			to: "/#product",
		},
		{
			label: "Thế giới",
			to: "/#world",
		},
		{
			label: "Tin tức",
			to: "/#news",
		},
		{
			label: "Liên hệ",
			to: "/#contact",
		},
	];

	return (
		<header className="site-navbar">
			<Link className="site-logo" to="/#home" onClick={closeMenu}>
				<img src="/logo.svg" alt="KINGBAY" />
			</Link>

			<button
				type="button"
				className={`site-menu-button ${menuOpen ? "active" : ""}`}
				onClick={() => setMenuOpen((current) => !current)}
				aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
				aria-expanded={menuOpen}
			>
				<span />
				<span />
			</button>

			<nav className={`site-navigation ${menuOpen ? "open" : ""}`}>
				{navigation.map((item) => {
					const storyActive = item.to === "/story" && location.pathname === "/story";

					const homeActive =
						item.to === "/#home" &&
						location.pathname === "/" &&
						(!location.hash || location.hash === "#home");

					return (
						<Link
							key={item.to}
							to={item.to}
							onClick={closeMenu}
							className={storyActive || homeActive ? "active" : undefined}
						>
							{item.label}
						</Link>
					);
				})}
			</nav>
		</header>
	);
}
