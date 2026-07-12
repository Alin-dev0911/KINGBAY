import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="site-footer-main">
				<div className="site-footer-brand">
					<Link to="/#home">
						<img src="/logo.svg" alt="KINGBAY" />
					</Link>

					<p>
						Lãnh địa trí tuệ — nơi nghệ thuật nội thất, chiến thuật cờ vua và thế giới Wonderland cùng hội
						tụ.
					</p>
				</div>

				<div className="site-footer-column">
					<span>Khám phá</span>

					<Link to="/#home">Trang chủ</Link>
					<Link to="/story">Câu chuyện</Link>
					<Link to="/#product">Sản phẩm</Link>
					<Link to="/#world">Thế giới KingBay</Link>
					<Link to="/#news">Tin tức</Link>
				</div>

				<div className="site-footer-column">
					<span>Liên hệ</span>

					<p>119 Lê Trọng Tấn, Tân Sơn Nhì</p>
					<p>TP. Hồ Chí Minh</p>

					<a href="tel:0384799202">0384 799 202</a>

					<a href="mailto:kingbay@gmail.com">kingbay@gmail.com</a>
				</div>
			</div>

			<div className="site-footer-bottom">
				<span>© 2026 KINGBAY</span>
				<span>Ai chiếu ai đây?</span>
			</div>
		</footer>
	);
}
